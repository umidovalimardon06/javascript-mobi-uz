export function createTask(nameOfTask, delayOfTask, tagsOfTask) {
    let taskObj = {
        taskName: nameOfTask,
        taskDelay: delayOfTask,
        taskTags: tagsOfTask,
        fn: function run() {
            console.log(`---------------`);
            console.log(`${this.taskName}`);
            console.log(`${this.taskDelay}`);
            console.log(`${this.taskTags}`);
            console.log(`---------------`);
        }
    }
    return taskObj;
}

export function execute(currentTask, taskIndex, runner) {
    console.log(`"${currentTask.taskName}" boshlandi delay ${currentTask.taskDelay/1000}s`);
    setTimeout(() => {
        currentTask.fn.call(currentTask);
        console.log(`${currentTask.taskDelay/1000}s tugadi.\n\n`);
        runner.runAllTasks(taskIndex + 1);
    }, currentTask.taskDelay);
}