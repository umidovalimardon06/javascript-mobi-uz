import {createTaskManager} from "./TaskManager.js";

let taskManager = createTaskManager();

taskManager.addTask("Domashniy zadaniyalarni qil!",10000,["Matematika,Geografiya"])
taskManager.addTask("Ko'chatlarga suv quy!",8000,["Olma,O'rik"])

taskManager.runAllTasks();