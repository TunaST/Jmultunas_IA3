import express from 'express';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 8080);
const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataFile = path.join(base, 'data', 'portfolio.json');

app.disable('x-powered-by');
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'it-portfolio' }));
app.get('/api/portfolio', async (_req, res) => {
  try {
    // Serve portfolio content dynamically from application data, rather than embedding it in static HTML.
    const content = await readFile(dataFile, 'utf8');
    res.set('Cache-Control', 'no-store');
    res.type('json').send(content);
  } catch (error) {
    console.error('Failed to load portfolio data:', error);
    res.status(500).json({ error: 'Portfolio data unavailable' });
  }
});

app.use(express.static(path.join(base, 'dist'), { index: false }));
app.get('*', (_req, res) => res.sendFile(path.join(base, 'dist', 'index.html')));
app.listen(port, '0.0.0.0', () => console.log(`Portfolio listening on ${port}`));
