import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!: ITask[]
  constructor(private taskService:TasksService) { 
    taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
