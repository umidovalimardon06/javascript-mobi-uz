import {createTask, isOutOfLength,execute} from "./functions.js";

export function createTaskManager() {
    const tasksArray = [];

    const TaskManager = {
        addTask:
            function (nameOfTask, delayOfTask, ...tasksTags) {
                let taskObj = createTask(nameOfTask, delayOfTask, tasksTags);
                tasksArray.push(taskObj);
            },

        runAllTasks:
            function (taskIndex = 0) {
                let tasksLength = tasksArray.length;
                if (isOutOfLength(taskIndex, tasksLength)) return;

                const currentTask = tasksArray[taskIndex];
                execute(currentTask, taskIndex, TaskManager);
            }
    }

    return TaskManager;
}


