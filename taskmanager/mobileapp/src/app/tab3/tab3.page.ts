import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    task_date: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    priority_level: new FormControl('', [Validators.required]),
    progress_level: new FormControl('', [Validators.required]),

  })

  constructor(private taskService: TaskService, private alertCtrl: AlertController) { }

  ngOnInit(): void {
  }

  add_task(){
    //console.log(this.form.value)
    this.taskService.createTask(this.form.value).subscribe(() => {
      // alert("Task was added sucessfully")
      this.showAlertBox("success", "task was added successfully")
      this.form.reset()
    })
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

  async showAlertBox(headerText, messageText) {
    const alert = await this.alertCtrl.create({
      header: headerText,
      message: messageText,
      buttons: ['ok']
    })
    alert.present()
  }

}
