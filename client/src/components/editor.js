export default class Editor {
    constructor(container) {
        this.container = container;
        this.textarea = document.createElement('textarea');
        this.textarea.style.width = '100%';
        this.textarea.style.height = 'calc(100% - 30px)'; // Adjust height
        this.textarea.style.backgroundColor = '#1e1e1e';
        this.textarea.style.color = '#d4d4d4';
        this.textarea.style.border = 'none';
        this.textarea.style.padding = '10px';
        this.textarea.style.fontFamily = 'Consolas, "Courier New", monospace';
        this.textarea.style.fontSize = '14px';
        this.textarea.style.resize = 'none';
        this.textarea.style.outline = 'none';
        this.textarea.spellcheck = false;

        this.container.appendChild(this.textarea);

        // Word Count Feature
        this.wordCount = document.createElement('div');
        this.wordCount.style.color = '#888';
        this.wordCount.style.padding = '5px 10px';
        this.wordCount.style.textAlign = 'right';
        this.wordCount.style.height = '20px';
        this.wordCount.textContent = 'Words: 0';
        this.container.appendChild(this.wordCount);

        this.textarea.addEventListener('input', () => this.updateWordCount());
    }

    setValue(content) {
        this.textarea.value = content;
        this.updateWordCount();
    }

    getValue() {
        return this.textarea.value;
    }

    updateWordCount() {
        const words = this.textarea.value.trim().split(/\s+/).filter(w => w.length > 0).length;
        this.wordCount.textContent = `Words: ${words}`;
    }
}
