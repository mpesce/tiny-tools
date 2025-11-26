const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const WORKSPACE_ROOT = path.resolve(__dirname, '..');

app.use(cors());
app.use(bodyParser.text({ type: '*/*' })); // Treat all bodies as text
app.use(express.static(path.join(__dirname, '../client')));

// Helper to ensure path is within workspace
const safePath = (reqPath) => {
    const resolved = path.resolve(WORKSPACE_ROOT, reqPath.replace(/^\//, ''));
    if (!resolved.startsWith(WORKSPACE_ROOT)) {
        throw new Error('Access denied');
    }
    return resolved;
};

// GET /api/files - List files (recursive)
app.get('/api/files', async (req, res) => {
    try {
        const listFiles = async (dir) => {
            const dirents = await fs.readdir(dir, { withFileTypes: true });
            const files = await Promise.all(dirents.map(async (dirent) => {
                const resPath = path.resolve(dir, dirent.name);
                const relativePath = path.relative(WORKSPACE_ROOT, resPath).replace(/\\/g, '/');

                // Ignore node_modules and .git for sanity
                if (relativePath.startsWith('node_modules') || relativePath.startsWith('.git')) return null;

                if (dirent.isDirectory()) {
                    return {
                        name: dirent.name,
                        path: relativePath,
                        type: 'directory',
                        children: await listFiles(resPath)
                    };
                } else {
                    return {
                        name: dirent.name,
                        path: relativePath,
                        type: 'file'
                    };
                }
            }));
            return files.filter(f => f !== null);
        };

        const files = await listFiles(WORKSPACE_ROOT);
        res.json(files);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// GET /api/files/:path - Read file
app.get('/api/files/*', async (req, res) => {
    try {
        const filePath = safePath(req.params[0]);
        const content = await fs.readFile(filePath, 'utf8');
        res.send(content);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// POST /api/files/:path - Write file
app.post('/api/files/*', async (req, res) => {
    try {
        const filePath = safePath(req.params[0]);
        await fs.writeFile(filePath, req.body);
        console.log(`Wrote to ${filePath}`);
        res.send('OK');
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`TinyTools Server running at http://localhost:${PORT}`);
    console.log(`Workspace Root: ${WORKSPACE_ROOT}`);
});
