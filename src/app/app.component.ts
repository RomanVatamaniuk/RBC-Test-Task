import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
  }
  popup:boolean = true;

  showData(data:boolean) {
    console.log(data);
    setTimeout(() => {
      this.popup = true;
    }, 3000)
    this.popup = false;
  }
}
