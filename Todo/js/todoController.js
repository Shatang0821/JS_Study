export class TodoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindAddTask(this.handleAddTask);
        this.view.bindToggle(this.handleToggleTask);
        this.view.bindDelete(this.handleDeleteTask);
        
        this.render();
    }

    handleAddTask = (title) =>{
        this.model.addTask(title);
        this.render();
    }

    handleToggleTask = (id) =>{
        this.model.toggleTaskDone(id);
        this.render();
    }

    handleDeleteTask = (id) =>{
        this.model.removeTask(id);
        this.render();
    }

    render(){
        this.view.render(this.model.tasks);
    }
}
