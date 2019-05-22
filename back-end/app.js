const http = require('http');
const fs = require('fs');
const request = require('request');
const port = 8888;

const ADVERTISER_HOST = "https://localhost:8180";
const VIEWER_HOST = "https://localhost:8080";
const VIEW_PAYMENT_AMOUNT = 100;
const ADVERTISER_MACAROON = "./advertiser/admin.macaroon";
const VIEWER_MACAROON = "./viewer/admin.macaroon";


const requestHandler = (request, response) => {
    if (request.url == '/sendPayment'){
        generateInvoice();
    }
    //console.log(request.url);
    response.end();
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something happened', err)
    }
    console.log(`server is listening on ${port}`)
});

const generateInvoice = () =>{
    const macaroon = fs.readFileSync(VIEWER_MACAROON).toString('hex');

    let options = {
        url: VIEWER_HOST + '/v1/invoices',
        rejectUnauthorized: false,
        json: true,
        headers: {
            'Grpc-Metadata-macaroon': macaroon,
        },
        form: JSON.stringify({value: VIEW_PAYMENT_AMOUNT}),
    };
    request.post(options, function(error, response, body) {
        sendPayment(body);
    });
};

const sendPayment = (body) =>{
    let requestBody = {
        amt:VIEW_PAYMENT_AMOUNT,
        payment_request: body.payment_request,
    };
    const macaroon = fs.readFileSync(ADVERTISER_MACAROON).toString('hex');
    let options = {
        url: ADVERTISER_HOST + '/v1/channels/transactions',
        rejectUnauthorized: false,
        json: true,
        headers: {
            'Grpc-Metadata-macaroon': macaroon,
        },
        form: JSON.stringify(requestBody),
    };
    request.post(options, function(error, response, body) {
        console.log(body);
    });
}