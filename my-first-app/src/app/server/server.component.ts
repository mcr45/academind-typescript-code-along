import { Component } from "@angular/core";

@Component({
selector:"app-server",
templateUrl:"./server.component.html",
styles: [`
.online{color:pink}
`]

}
)
export class ServerComponent{
  serverId:number=117
  serverStatus:string='Cloud'

  getServerStatus(){
    this.serverStatus= Math.random() > 0.5 ? "ofline" : "online"
  }

  getColor(){
    return this.serverStatus==="ofline" ? 'blue' : "green"
  }

  getDate(){
    return new Date()
  }
}
