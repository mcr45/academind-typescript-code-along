import { Component } from "@angular/core";

@Component({
selector:"app-server",
templateUrl:"./server.component.html",
styles: [`
.online{color:pink}
.sowhite{
  color:red
}
`]

}
)
export class ServerComponent{
  serverId:number=117
  serverStatus:string='Cloud'
  showtime:boolean=true
  scusisadirmilora:string[]=[]
  bgcolor:string=''
  getServerStatus(){
    this.serverStatus= Math.random() > 0.5 ? "ofline" : "online"
  }

  getColor(){
    return this.serverStatus==="ofline" ? 'blue' : "green"
  }
  onTime(){
    this.showtime=this.showtime? false:true
    this.scusisadirmilora.push("button has been clicked, I repeat button has been clicked")
  }
  getDate(){
    return new Date()
  }
  getBlue(){
    if(this.scusisadirmilora.length>4){
      this.bgcolor="blue"
      return 'true'
    }
  }
}
