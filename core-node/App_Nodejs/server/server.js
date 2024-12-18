const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
};

const SCORES_FILE = path.join(__dirname, "api", "score", "puntos.json");

let scoreData = { abuelo: 0, nieto: 0 };

// Función para guardar puntos
function guardarPuntos(scoreData) {
  fs.writeFileSync(SCORES_FILE, JSON.stringify(scoreData, null, 2), "utf-8");
  console.log("ok escrito");
}

// Función para leer puntos
function leerPuntos() {
  if (!fs.existsSync(SCORES_FILE)) {
    console.log("ok creado");
    guardarPuntos(scoreData);
  } else {
    console.log("ok leido");
    return JSON.parse(fs.readFileSync(SCORES_FILE, "utf-8"));
  }
}

const MESSAGES_FILE = path.join(__dirname, "api", "message", "mensajes.json");

// Función para guardar mensajes
function guardarMensaje(mensaje) {
  let mensajes = leerMensajes();
  mensajes.push(mensaje);
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(mensajes, null, 2), "utf-8");
  console.log("ok enviado");
}

// Función para leer mensajes
function leerMensajes() {
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify([]), "utf-8");
  }
  return JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf-8"));
}

const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
};

// Servidor HTTP
const server = https.createServer(options, (req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "../public/index.html"),
      (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end("Error cargando la página");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content);
        }
      }
    );
  } else if (req.url.startsWith("/static/")) {
    const filePath = path.join(
      __dirname,
      "../public",
      req.url.replace("/static/", "")
    );
    const ext = path.extname(filePath);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("Archivo no encontrado");
      } else {
        res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "text/plain" });
        res.end(content);
      }
    });
  } else if (req.url === "/api/score" && req.method === "GET") {
    const ScoreData = leerPuntos();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        puntos: ScoreData,
      })
    );
  } else if (req.url === "/api/score" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const scoreData = JSON.parse(body);
        guardarPuntos(scoreData);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, puntos: scoreData }));
      } catch (error) {
        console.error("Error al procesar los datos:", error);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      }
    });
  } else if (req.url === "/api/messages" && req.method === "GET") {
    try {
      const mensajes = leerMensajes();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, mensajes }));
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
  } else if (req.url === "/api/message" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const { mensaje } = JSON.parse(body);
        if (!mensaje) throw new Error("Mensaje vacío");
        guardarMensaje(mensaje);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true }));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: error.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end("Página no encontrada");
  }
});
// Manejar el cierre del servidor para borrar los mensajes cuando se detenga el servidor
process.on("SIGINT", () => {
  console.log("Servidor detenido. Borrando mensajes...");
  if (fs.existsSync(MESSAGES_FILE)) {
    fs.unlinkSync(MESSAGES_FILE); // Elimina el archivo de mensajes
    console.log("Mensajes eliminados.");
  }
  server.close(() => {
    console.log("Servidor cerrado");
    process.exit(0); // Salir del proceso con éxito
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
