import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewServers=false
serverStatus='Well,there is nothing here.....what if....you click that button right there'
serverName=''
userName=""
serverCreated=false
servers=['amazon','google']


constructor(){
  setTimeout(()=>{this.allowNewServers=true},3000)
}

onCreateServer(){
  this.serverStatus='OOOOOOHHHHHH YEEEEEAH, you just created me.Now I will take over the world'
  this.serverCreated=true
  this.servers.push(this.serverName)
}
onUpdateServerName(event:Event){
  this.serverName=(<HTMLInputElement>event.target).value
}

onResetName(){
  this.userName=""
}


}
