import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTableComponent } from './TodoTable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoTableComponent]
})
export class TodoTableModule { }
