//Manejos de los botones//
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    // Si la pestaña activa es clasificación, actualizamos los puntos
    if (tab.dataset.tab === "clasificacion") {
      actualizarPuntuacion(); // Llama a la función que sincroniza los puntos con el servidor
    }
  });
});

// Estado de la aplicación en relacion a los puntos//
let scoreData = { abuelo: 0, nieto: 0 };

async function actualizarPuntuacion() {

  try {
    // Enviar solicitud al servidor con el cuerpo basado en scoreData
    const score = await fetch("/api/score", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const result = await score.json();
    console.log(result);

    // Actualizar scoreData locales con la respuesta del servidor
    if (result.success) {
      scoreData = result.puntos; // Actualiza los puntos del jugador
    } else {
      console.error("Error al actualizar puntuación:", result.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  const puntosAbueloElem = document.getElementById("puntosAbuelo");
  const puntosNietoElem = document.getElementById("puntosNieto");

  if (puntosAbueloElem && puntosNietoElem) {
    puntosAbueloElem.textContent = scoreData.abuelo;
    puntosNietoElem.textContent = scoreData.nieto;
  } else {
    console.warn("Elementos de puntuación no están disponibles todavía.");
  }
}
// Declaramos las variables de los mensajes
const mensajesOutput = document.getElementById("mensajesOutput");
const mensajeInput = document.getElementById("mensajeInput");

// Función para enviar mensaje
// Enviar mensaje al servidor mediante el metodo POST
async function enviarMensaje() {
  const mensaje = mensajeInput.value;
  if (mensaje) {
    try {
      const envio = await fetch("/api/message", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje }),
      });
      const result = await envio.json();
      if (result.success) {
        mensajeInput.value = "";
        await obtenerMensajes(); // Refresca la lista de mensajes
      } else {
        alert("Error al enviar el mensaje: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje");
    }
  } else {
    alert("Por favor, escribe un mensaje antes de enviar.");
  }
}

// Obtener mensajes desde el servidor mediante el metodo GET
async function obtenerMensajes() {
  try {
    const response = await fetch("/api/messages", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    if (result.success) {
      // Limpiar la vista actual
      mensajesOutput.innerHTML = "";
      result.mensajes.forEach((msg) => {
        const mensajeElem = document.createElement("div");
        mensajeElem.textContent = msg;
        mensajesOutput.appendChild(mensajeElem);
      });
    } else {
      console.error("Error al obtener mensajes:", result.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
