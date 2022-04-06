import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar) {}

  showNotification() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3500,
      horizontalPosition:'center',
      panelClass:'notification'
    })
  }
}
