import { Component, OnInit } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  tasks!: Itask[]
  constructor(private taskService:TaskService) { 
    taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
