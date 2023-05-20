import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { BoardRoutingModule } from './board-routing.module';
import { BoardOverviewComponent } from './components/overview/overview.component';
import { BoardDetailComponent } from './components/detail/detail.component';

const components = [BoardOverviewComponent];

@NgModule({
  imports: [SharedModule, BoardRoutingModule],
  exports: [],
  declarations: [...components, BoardDetailComponent],
  providers: [],
})
export class BoardModule {}
