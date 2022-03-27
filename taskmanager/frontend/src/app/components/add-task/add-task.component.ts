import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    task_date: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    priority_level: new FormControl('', [Validators.required]),
    progress_level: new FormControl('', [Validators.required]),

  })

  constructor() { }

  ngOnInit(): void {
  }

  add_task(){
    console.log(this.form.value)
  }

  get title(){
    return this.form.get('title')!;
  }
  get description(){
    return this.form.get('description')!;
  }
  get task_date(){
    return this.form.get('task_date')!;
  }
  get category(){
    return this.form.get('category')!;
  }
  get priority_level(){
    return this.form.get('priority_level')!;
  }
  get progress_level(){
    return this.form.get('progress_level')!;
  }

}


