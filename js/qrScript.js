const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url, size);

    if (url === '') {
        alert ('Please enter URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url,size);
        }, 1000);
    }
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size
    });
};

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';

}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';

}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);