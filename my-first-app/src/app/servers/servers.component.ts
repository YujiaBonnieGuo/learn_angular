import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! name is ' + this.serverName;
    this.allowNewServer = false;
  }
  onUpdateServerName(event: any) {
    console.log('event: ', event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
