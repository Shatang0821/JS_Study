export class TodoModel {
    constructor() {
        this.tasks = [];
    }

    addTask(title){
        const task = {
            id: Date.now(),
            title,          // title: title 同じ名前だから省略できる
            done:false
        };
        this.tasks.push(task);
    }

    removeTask(id){
        this.tasks = this.tasks.filter(task => task.id !== id); // idが一致しないものだけ残す
    }

    toggleTaskDone(id){
        const task = this.tasks.find(task => task.id === id);
        if(task){
            task.done = !task.done;
        }
    }

}
