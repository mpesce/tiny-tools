export default class FileExplorer {
    constructor(container, onFileSelect) {
        this.container = container;
        this.onFileSelect = onFileSelect;
    }

    async loadFiles() {
        try {
            const response = await fetch('/api/files');
            const files = await response.json();
            this.render(files, this.container);
        } catch (err) {
            this.container.innerHTML = `<div style="color: red; padding: 10px;">Error loading files: ${err.message}</div>`;
        }
    }

    render(items, parentElement) {
        parentElement.innerHTML = '';
        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = '0';
        ul.style.margin = '0';

        items.forEach(item => {
            const li = document.createElement('li');
            li.style.padding = '4px 10px';
            li.style.cursor = 'pointer';
            li.style.whiteSpace = 'nowrap';
            li.style.overflow = 'hidden';
            li.style.textOverflow = 'ellipsis';

            // Simple icon simulation
            const icon = item.type === 'directory' ? '📁' : '📄';
            li.textContent = `${icon} ${item.name}`;

            li.addEventListener('mouseover', () => li.style.backgroundColor = '#37373d');
            li.addEventListener('mouseout', () => li.style.backgroundColor = 'transparent');

            if (item.type === 'file') {
                li.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.onFileSelect(item.path);
                });
                ul.appendChild(li);
            } else if (item.type === 'directory') {
                li.style.fontWeight = 'bold';
                const childContainer = document.createElement('div');
                childContainer.style.paddingLeft = '15px';
                childContainer.style.display = 'none'; // Collapsed by default

                li.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isHidden = childContainer.style.display === 'none';
                    childContainer.style.display = isHidden ? 'block' : 'none';
                });

                ul.appendChild(li);
                ul.appendChild(childContainer);

                if (item.children) {
                    this.render(item.children, childContainer);
                }
            }
        });

        parentElement.appendChild(ul);
    }
}
