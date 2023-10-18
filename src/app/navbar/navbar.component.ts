import { Component } from '@angular/core';
import { GenerateDataFormComponent } from './components/generate-data-form/generate-data-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dougs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialogForm(): void {
    let dialogRef = this.dialog.open(GenerateDataFormComponent, {
      maxWidth: '720px',
      height: '350px',
      position: { top: '10px' },
      panelClass: 'dialog-form'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
