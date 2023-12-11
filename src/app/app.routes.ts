import { Routes } from '@angular/router';
import { TodoTableComponent } from './component/TodoTable/TodoTable.component';
import { HomeGridComponent } from './component/homeGrid/homeGrid.component';

export const routes: Routes = [

  { path: 'Table', component: TodoTableComponent },
  { path: 'Home', component: HomeGridComponent },
];
