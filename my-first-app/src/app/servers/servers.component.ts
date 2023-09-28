import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewServers=false
serverStatus='Well,there is nothing here.....what if....you click that button right there'
serverName='Now I am  here'
userName=""



constructor(){
  setTimeout(()=>{this.allowNewServers=true},3000)
}

onCreateServer(){
  this.serverStatus='OOOOOOHHHHHH YEEEEEAH, you just created me.Now I will take over the world'
}
onUpdateServerName(event:Event){
  this.serverName=(<HTMLInputElement>event.target).value
}

onResetName(){
  this.userName=""
}


}
