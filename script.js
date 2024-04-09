document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate");
    
    const downloadLink = document.getElementById("download");
    const qrCodeContainer = document.getElementById("qr-code");

    generateButton.addEventListener("click", () => {
        const data = document.getElementById("data").value;
        const width = document.getElementById("width").value;
        const height = document.getElementById("height").value;
        const format = document.getElementById("format").value;
        const qrColor = document.getElementById("qr-color").value;
        const bgColor = document.getElementById("bg-color").value;

        const qrCode = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
            data
        )}&size=${width}x${height}&format=${format}&color=${qrColor}&bgcolor=${bgColor}`;

        qrCodeContainer.innerHTML = `<img src="${qrCode}" alt="QR Code" width="${width}" height="${height}">`;
        downloadLink.href = qrCode;
        downloadLink.style.display = "block";
    });
});
