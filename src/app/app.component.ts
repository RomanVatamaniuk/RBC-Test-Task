import { Component } from '@angular/core';
import { NotifierService } from './services/notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private notifierService: NotifierService) {}

  ngOnInit() {
  }
}
