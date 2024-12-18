# App de Cuidado Familiar con Node.js

## Estructura del Proyecto

```
family-care-app/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── server/
│   └── server.js
│
├── package.json
└── README.md
```

### 1. Inicializar Proyecto

```bash
mkdir family-care-app
cd family-care-app
npm init -y
```

### 2. Separar HTML, CSS y JavaScript

- Crea carpeta `public`
- Mueve estilos a `public/styles.css`
- Mueve scripts a `public/app.js`
- Modifica `index.html` para enlazar archivos externos

### 3. Crear Servidor Node.js Básico

En `server/server.js`:

```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
};

const server = http.createServer((req, res) => {
  // Ruta raíz
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "../public/index.html"),
      (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end("Error cargando página");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content);
        }
      }
    );
  }

  // Servir archivos estáticos
  else if (req.url.startsWith("/static/")) {
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
  }

  // 404 para rutas no encontradas
  else {
    res.writeHead(404);
    res.end("Página no encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
```

### 4. Archivo `package.json`

```json
{
  "name": "family-care-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server/server.js"
  }
}
```

### 5. Seguridad `autocertificación`
```
const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
};

# Modifica el server añadiendo la constante de option

const server = https.createServer(options, (req, res) => {
```

### Comandos Finales

```bash
npm start  # Iniciar servidor
Recuerda utilizar https://localhost:3000 en el nevegador para abrir la pagina principal
```
