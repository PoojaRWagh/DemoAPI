import { Component } from '@angular/core';
import { DemoapiService } from './demoapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoserviceApi';
 demodata:any;
 isclicked=false;
constructor(private demoservice:DemoapiService)  {}
apiData()
{
  this.isclicked=!this.isclicked;
  this.demoservice.getapi().subscribe((data)=>{
    console.log("*******data*********",data);
    this.demodata=data;
  })
//  this.isclicked=!this.isclicked;
  }
  info(data:any)
  {
    alert(data);
  }
}
