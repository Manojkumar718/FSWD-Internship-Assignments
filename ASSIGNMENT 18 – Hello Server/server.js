const express = require('express');
const app = express();
// Use PORT env if provided; default to 3001 to avoid conflicts with common dev servers (Vite uses 3000)
const PORT = process.env.PORT || 3001;

// Root route
const renderPage = (title, bodyHtml) => `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Segoe UI,Roboto,Arial,sans-serif;background:#f7fafc;color:#0b1724;padding:32px} .container{max-width:900px;margin:0 auto} h1{font-size:32px;margin-bottom:8px} p, pre{font-size:20px;line-height:1.6}</style></head><body><div class="container"><h1>${title}</h1>${bodyHtml}</div></body></html>`;

app.get('/', (req, res) => {
  const body = `<p>Assignment 18 — Hello Server.</p><p>Available routes:</p><ul><li><strong>/about</strong> — information page</li><li><strong>/status</strong> — JSON status (shown as readable HTML)</li></ul>`;
  res.send(renderPage('Assignment 18 — Hello Server', body));
});

// About route
app.get('/about', (req, res) => {
  const body = `<p>This Node server demonstrates multiple routes for Assignment 18.</p><p>Use <code>/status</code> to view server status in JSON.</p>`;
  res.send(renderPage('About — Assignment 18', body));
});

// Status route (JSON)
app.get('/status', (req, res) => {
  const data = {
    status: 'ok',
    uptime_seconds: Math.floor(process.uptime()),
    timestamp: Date.now(),
  };
  const pretty = JSON.stringify(data, null, 2);
  const body = `<p>Server status (JSON):</p><pre>${pretty}</pre>`;
  res.send(renderPage('Status — Assignment 18', body));
});

// (Removed routes: /greet/:name and /products)

// 404 handler
app.use((req, res) => {
  res.status(404).send('Route not found. Try /, /about, /status');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
