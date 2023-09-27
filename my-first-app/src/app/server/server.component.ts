import { Component } from "@angular/core";

@Component({
selector:"app-server",
templateUrl:"./server.component.html"
}
)
export class ServerComponent{
  serverId:number=117
  serverStatus:string='Cloud'

  getDate(){
    return new Date()
  }
}
