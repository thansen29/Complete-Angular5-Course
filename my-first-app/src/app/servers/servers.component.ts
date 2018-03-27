import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']

  visible = true;
  log = [];

  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created, name is ${this.serverName}`;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  clearUsername() {
    this.username = '';
  }

  isEmpty() {
    return Boolean(!this.username.length);
  }

  toggleDisplay() {
    this.visible = !this.visible;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
