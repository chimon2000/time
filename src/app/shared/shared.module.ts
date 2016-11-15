import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { ActionComponent } from './action';
import { TableComponent } from './table';
import { IsEmptyPipe } from './pipes';

@NgModule({
    imports: [
        CommonModule,
        MomentModule
    ],
    exports: [
        TableComponent,
        ActionComponent,
        IsEmptyPipe
    ],
    declarations: [
        TableComponent,
        ActionComponent,
        IsEmptyPipe
    ],
    providers: []
})
export class SharedModule { }
