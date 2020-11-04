import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logStatusChnaged(status){
    console.log('A server status changed, new status: ' + status);
  }
}
