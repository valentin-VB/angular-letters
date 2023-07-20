import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { HomeComponent } from './pages/home/home.component';
import { LetterDetailsComponent } from './pages/letter-details/letter-details.component';
import { LetterFormComponent } from './components/letter-form/letter-form.component';
import { FormControlDialogComponent } from './components/form-control-dialog/form-control-dialog.component';
import { LetterPreviewComponent } from './components/letter-preview/letter-preview.component';
import { LetterFormControlComponent } from './components/letter-form-control/letter-form-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetterListComponent } from './components/letter-list/letter-list.component';
import { LetterService } from './services/letter.service';
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LetterDetailsComponent,
    LetterFormComponent,
    LetterFormControlComponent,
    FormControlDialogComponent,
    LetterPreviewComponent,
    LetterListComponent,
    DeleteConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
