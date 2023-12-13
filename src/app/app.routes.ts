import { Routes } from '@angular/router';
import { TodoTableComponent } from './component/TodoTable/TodoTable.component';
import { HomeGridComponent } from './component/homeGrid/homeGrid.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Table', component: TodoTableComponent },
  { path: 'Home', component: HomeGridComponent },
];
