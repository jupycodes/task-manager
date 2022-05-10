import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Itask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskService { constructor(private httpClient:HttpClient) { } 

  getTasks() { 
    return this.httpClient.get<Itask[]>('http://localhost:3000'); 
  } 

  createTask(formData:any){ 
    console.log('post');
    return this.httpClient.post('http://localhost:3000', formData); 
  } 
} 