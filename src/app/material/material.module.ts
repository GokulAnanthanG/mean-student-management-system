import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule} from '@angular/forms';
import {  MatDividerModule} from '@angular/material/divider';
import {  MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

  
const material=[MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatTooltipModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  MatDividerModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatDialogModule
];
@NgModule({
  declarations: [],
  imports: [
    material
  ] ,exports:[material]
})
export class MaterialModule { }
