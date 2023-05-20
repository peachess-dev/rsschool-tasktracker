import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CheckboxModule,
    PasswordModule,
    CalendarModule,
    CardModule,
    DataViewModule,
  ],
  imports: [BrowserAnimationsModule],
})
export class PrimengModule {}
