import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from 'src/app/interfaces/task'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  getTasks(){
    return this.httpClient.get<ITask[]>('http://localhost:3000') // the interface specifies that whatever data we're importing needs to conform to specification in interface ITask
  }

  createTask(formData:any){
    return this.httpClient.post('http://localhost:3000', formData);
  }
}
