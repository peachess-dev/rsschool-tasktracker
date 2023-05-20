import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardOverviewComponent } from './components/overview/overview.component';
import { BoardDetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: BoardOverviewComponent,
  },
  {
    path: ':id',
    component: BoardDetailComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
