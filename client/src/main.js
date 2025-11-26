import FileExplorer from './components/file-explorer.js';
import Editor from './components/editor.js';

class TinyTools {
    constructor() {
        this.fileExplorer = new FileExplorer(document.getElementById('sidebar'), this.onFileSelect.bind(this));
        this.editor = new Editor(document.getElementById('editor-container'));
        this.currentFilePath = null;

        document.getElementById('save-btn').addEventListener('click', () => this.saveCurrentFile());

        this.init();
    }

    async init() {
        await this.fileExplorer.loadFiles();
    }

    async onFileSelect(path) {
        this.currentFilePath = path;
        try {
            const response = await fetch(`/api/files/${path}`);
            if (!response.ok) throw new Error('Failed to load file');
            const content = await response.text();
            this.editor.setValue(content);
            this.updateStatus(`Opened: ${path}`);
        } catch (err) {
            console.error(err);
            this.updateStatus(`Error opening file: ${err.message}`);
        }
    }

    async saveCurrentFile() {
        if (!this.currentFilePath) return;

        try {
            const content = this.editor.getValue();
            const response = await fetch(`/api/files/${this.currentFilePath}`, {
                method: 'POST',
                body: content
            });

            if (!response.ok) throw new Error('Failed to save file');
            this.updateStatus(`Saved: ${this.currentFilePath}`);
        } catch (err) {
            console.error(err);
            this.updateStatus(`Error saving file: ${err.message}`);
        }
    }

    updateStatus(message) {
        document.getElementById('status-bar').textContent = message;
    }
}

new TinyTools();
