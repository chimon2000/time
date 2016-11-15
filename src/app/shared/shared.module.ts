import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { ActionComponent } from './action';
import { TableComponent } from './table';

@NgModule({
    imports: [
        CommonModule,
        MomentModule
    ],
    exports: [
        TableComponent,
        ActionComponent
    ],
    declarations: [
        TableComponent,
        ActionComponent
    ],
    providers: []
})
export class SharedModule { }
