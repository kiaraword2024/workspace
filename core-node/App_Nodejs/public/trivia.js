class JuegoTrivia {
  constructor(Abuelo, Nieto, categoria = "", dificultad = "medium") {
    this.Abuelo = { nombre: Abuelo, puntaje: 0 };
    this.Nieto = { nombre: Nieto, puntaje: 0 };
    this.preguntasActuales = [];
    this.preguntaActual = 0;
    this.turnoActual = this.Abuelo;
    this.categoria = categoria;
    this.dificultad = dificultad;
  }
  //llamada a la API externa OpenSpurce
  async iniciarJuego() {
    try {
      const url = `https://opentdb.com/api.php?amount=2${
        this.categoria ? `&category=${this.categoria}` : ""
      }&difficulty=${this.dificultad}&language=es`;

      const response = await fetch(url);
      const data = await response.json();

      this.preguntasActuales = data.results.map((pregunta) => ({
        texto: this.decodificarTexto(pregunta.question),
        respuestaCorrecta: this.decodificarTexto(pregunta.correct_answer),
        respuestas: this.mezclarRespuestas(pregunta),
      }));

      this.mostrarSiguientePregunta();
    } catch (error) {
      console.error("Error al cargar preguntas:", error);
      alert("Error al cargar preguntas. Intenta de nuevo.");
    }
  }

  decodificarTexto(texto) {
    return texto
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&ntilde;/g, "ñ")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"');
  }

  mezclarRespuestas(pregunta) {
    const respuestas = [pregunta.correct_answer, ...pregunta.incorrect_answers];
    return respuestas
      .map((resp) => this.decodificarTexto(resp))
      .sort(() => Math.random() - 0.5);
  }

  mostrarSiguientePregunta() {
    if (this.preguntaActual >= this.preguntasActuales.length) {
      this.finalizarJuego();
      this.actualizarPuntuacion();
      return;
    }

    const pregunta = this.preguntasActuales[this.preguntaActual];

    const preguntaContainer = document.getElementById("pregunta-container");
    const respuestasContainer = document.getElementById("respuestas-container");

    preguntaContainer.innerHTML = `
              <h2>Turno de: ${this.turnoActual.nombre}</h2>
              <p>${pregunta.texto}</p>
          `;

    respuestasContainer.innerHTML = pregunta.respuestas
      .map(
        (respuesta) => `
                  <button onclick="juego.seleccionarRespuesta('${respuesta}')" class="btn-respuesta">
                      ${respuesta}
                  </button>
              `
      )
      .join("");
  }
  seleccionarRespuesta(respuestaSeleccionada) {
    const pregunta = this.preguntasActuales[this.preguntaActual];

    // Mostrar si la respuesta fue correcta
    const respuestaCorrectaElem = document.getElementById("respuesta-correcta");
    const respuestaCorrectaTexto = document.getElementById(
      "respuesta-correcta-texto"
    );

    respuestaCorrectaElem.style.display = "block";
    respuestaCorrectaTexto.textContent = pregunta.respuestaCorrecta;

    if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
      this.turnoActual.puntaje += 1; // Aumentar puntaje si es correcto
      this.actualizarPuntuacion();
    }

    // Cambiar de turno pero esperar un momento antes de mostrar la siguiente pregunta
    setTimeout(() => {
      this.turnoActual =
        this.turnoActual === this.Abuelo ? this.Nieto : this.Abuelo;
      this.preguntaActual++;

      // Ocultar el div de respuesta correcta
      respuestaCorrectaElem.style.display = "none";

      this.mostrarSiguientePregunta();
    }, 3000); // Esperar 3 segundos antes de avanzar
  }

  actualizarPuntuacion() {
    const puntosAbueloElem = document.getElementById("puntosAbuelo");
    const puntosNietoElem = document.getElementById("puntosNieto");

    if (puntosAbueloElem && puntosNietoElem) {
      puntosAbueloElem.textContent = `${this.Abuelo.nombre}: ${this.Abuelo.puntaje}`;
      puntosNietoElem.textContent = `${this.Nieto.nombre}: ${this.Nieto.puntaje}`;
    } else {
      console.warn("Elementos de puntuación no están disponibles todavía.");
    }
 //Utilizo esta variable para enviar el resultado al servidor    
    let scoreData = {
      abuelo: this.Abuelo.puntaje,
      nieto: this.Nieto.puntaje,
    };
    fetch("https://localhost:3000/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(scoreData),
    })
      .then(async (res) => console.log(await res.text()))
      .catch((error) =>
        console.error("Error al actualizar puntuaciones:", error)
      );
  }

  finalizarJuego() {
    const { Abuelo, Nieto } = this;

    // Determinar el resultado
    let mensaje;
    if (Abuelo.puntaje === Nieto.puntaje) {
      mensaje = "Empate";
    } else {
      const ganador = Abuelo.puntaje > Nieto.puntaje ? Abuelo : Nieto;
      mensaje = "Gana el " + ganador.nombre;
    }
    // Actualizar la interfaz
    document.getElementById("juego-trivia").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";
    
    document.getElementById("winner").textContent = mensaje;
    document.getElementById("puntosAbuelo").textContent = this.Abuelo.puntaje;
    document.getElementById("puntosNieto").textContent = this.Nieto.puntaje;
  }
}

let juego;

function iniciarJuego() {
  const Abuelo = "Abuelo";
  const Nieto = "Nieto";
  const categoria = document.getElementById("categoria").value;
  const dificultad = document.getElementById("dificultad").value;

  document.getElementById("mainScreen").style.display = "none";
  document.getElementById("juego-trivia").style.display = "block";

  juego = new JuegoTrivia(
    Abuelo,
    Nieto,
    categoria,
    dificultad
  );
  juego.iniciarJuego();
}

function reiniciarJuego() {
  document.getElementById("mainScreen").style.display = "block";
  document.getElementById("juego-trivia").style.display = "none";
  document.getElementById("resultScreen").style.display = "none";
}
