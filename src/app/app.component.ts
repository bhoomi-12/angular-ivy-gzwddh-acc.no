import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  infom:Array<any> =[];
  addValue(xyz){
    this.infom.push(xyz);
    // console.log(xyz)
  }
  deleteData(inf){
    this.infom.splice(this.infom.indexOf(inf),1);
  }
}
