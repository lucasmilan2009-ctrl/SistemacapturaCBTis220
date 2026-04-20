function iniciarProteccion(claveCorrecta = "CBTis220") {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.innerHTML = `
    <div id="loginBox" style="
      background:#fff; padding:30px; border-radius:12px; text-align:center;
      box-shadow:0 0 20px rgba(0,0,0,0.6); width:350px; font-family:Arial,sans-serif;">
      <h2 style="margin-bottom:20px; color:#003366; font-size:18px;">
        Ingresa la contraseña<br>para poder acceder a esta opción
      </h2>
      <input type="password" id="passwordInput" placeholder="Contraseña" 
        style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ccc; border-radius:6px;">
      <button onclick="checkPassword('${claveCorrecta}')" 
        style="background-color:#C8102E; color:white; border:none; padding:12px 20px; border-radius:6px; font-weight:bold; cursor:pointer; width:100%; margin-bottom:10px;">
        Acceder
      </button>
      <a href="index.html" style="
        display:inline-block; background:#6E6E6E; color:white; padding:10px 20px;
        border-radius:6px; text-decoration:none; font-weight:bold;">
        Regresar al inicio
      </a>
    </div>
  `;
  overlay.style.cssText = `
    position:fixed; top:0; left:0; width:100%; height:100%;
    background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:10000;
  `;
  document.body.appendChild(overlay);
}

function checkPassword(claveCorrecta) {
  const claveIngresada = document.getElementById("passwordInput").value;
  if (claveIngresada === claveCorrecta) {
    document.getElementById("overlay").style.display = "none"; // Oculta el cuadro
  } else {
    alert("Contraseña incorrecta. Intenta de nuevo.");
  }
}