import {itemService} from "./ItemService";
import {playerService} from "./PlayerService";
import Task from "../models/tasks/Task";

class TaskService {
    private readonly tasks: Task[];
    private activeTask: Task | null = null;
    private progress:number = 0;
    private readonly ticksPerSecond:number = 100;

    constructor() {
        this.tasks = buildTasks()
    }

    startTask(taskName: string): void {
        if (this.activeTask) {
            // Queueing logic (unchanged)
            return;
        }

        this.activeTask = this.getTask(taskName);

        this.progress = 0;
        const intervalId = setInterval(() => {
            if (this.progress >= 1) {
                //clearInterval(intervalId); used to clear interval TODO
                this.activeTask.completion();
                this.progress = 0;
                return;
            }

            const increment = (1000/this.activeTask.duration)/this.ticksPerSecond
            this.progress += increment;
        }, 1000/this.ticksPerSecond);
    }

    private getTask(taskName: string):Task
    {
        for (const task of this.tasks) {
            if (task.name === taskName)
            {
                return task;
            }
        }
        throw new TypeError(`${taskName} was not found in the collection of tasks.`)
    }

    getProgress():number
    {
        return this.progress
    }

    getActiveTask():Task
    {
        return this.activeTask;
    }

    isActive(): boolean {
        return this.activeTask !== null;
    }
}

function buildTasks(): Task[] {
    return [
        {
            name: "chopNormalTree",
            duration: 2000,
            completion: ()=>{
                playerService.addSkillExp("Woodcutting", 5);
                itemService.addItem('normalLog', 1);
            },
        },
    ];
}

export const taskService = new TaskService();