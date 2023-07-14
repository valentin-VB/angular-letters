import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LetterDetailsComponent } from './pages/letter-details/letter-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'letter',
    children: [
      { path: '', component: LetterDetailsComponent },
      { path: ':id', component: LetterDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
