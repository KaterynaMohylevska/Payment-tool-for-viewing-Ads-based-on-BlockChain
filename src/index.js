//const createInvoiceRequest = "http://localhost:8888/createInvoice";
const sendPaymentRequest = "http://localhost:8888/sendPayment";

document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById("blockChainAd");

    video.addEventListener('mouseover', (e)=>{
        video.play();
        video.setAttribute("controls","controls");
    });

    video.addEventListener('mouseleave', (e)=>{
        video.pause();
        video.removeAttribute("controls");
    });

    video.addEventListener('ended', (e)=>{
        // sendPayment();
    });

});


async function sendPayment() {
    let response = await (await fetch(sendPaymentRequest, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }));

    await (response => {
        console.log('Success:', JSON.stringify(response));
    });

}