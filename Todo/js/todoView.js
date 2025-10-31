export class TodoView {
    constructor() {
        this.list = document.getElementById('taskList');
        this.input = document.getElementById('taskInput');
        this.addButton = document.getElementById('addBtn');
    }

    render(tasks) {
        this.list.innerHTML = ''; // 既存のリストをクリア
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            if(task.done) li.classList.add('done');

            li.addEventListener('click',() => this.onToggle(task.id));
            li.addEventListener('contextmenu', e => {
                e.preventDefault();
                this.onDelete(task.id);
            });

            this.list.appendChild(li);
        });
    }

    bindAddTask(handler) {
        this.addButton.addEventListener('click', () => {
            const title = this.input.value.trim();
            if(title) handler(title);
            this.input.value = '';
        });
    }

    bindToggle(handler) {
        this.onToggle = handler;
    }

    bindDelete(handler) {
        this.onDelete = handler;
    }
}
