import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'テスト';
  clickMessage = '';
  values = '';
  teams:string[] = [
    "1チーム目",
    "2チーム目",
    "3チーム目",
    "4チーム目",
    "5チーム目",
    "6チーム目"
  ];

  
  onClickMe() {
    if(this.clickMessage.length >0){
      this.clickMessage = "";
    } else {
      this.clickMessage = "clicked";
    }
  }

  update(value: string) { this.values = value; }
  
  onEnter(value: string) {
    if(value.length > 0){
      this.values += value + ' | ';
    } else {
      this.values="";
    }
  }
}
