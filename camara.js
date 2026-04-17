const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Error al acceder a la cámara: ", err);
  });

  const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function scanQRCode() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const code = jsQR(imageData.data, canvas.width, canvas.height);

  if (code) {
    console.log("Código QR detectado:", code.data);
    alert("QR: " + code.data);
  }

  requestAnimationFrame(scanQRCode);
}

video.addEventListener('play', () => {
  scanQRCode();
});
