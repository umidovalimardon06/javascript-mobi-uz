import {createTask,execute} from "./functions.js";

export function createTaskManager() {
    const tasksArray = [];

    const TaskManager = {
        addTask:
            function (nameOfTask, delayOfTask, ...tagsOfTask) {
                let taskObj = createTask(nameOfTask, delayOfTask, tagsOfTask);
                tasksArray.push(taskObj);
            },

        runAllTasks:
            function (taskIndex = 0) {
                let tasksLength = tasksArray.length;
                if (taskIndex >= tasksLength) return;

                const currentTask = tasksArray[taskIndex];
                execute(currentTask, taskIndex, TaskManager);
            }
    }

    return TaskManager;
}