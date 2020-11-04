import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private logger: LoggerService){

  }

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.logger.logStatusChnaged(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
