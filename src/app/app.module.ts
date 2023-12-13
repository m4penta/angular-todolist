import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ApiServicesService } from './services/api-services.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers:[ApiServicesService, HttpClient,provideHttpClient()],
  exports: [RouterModule],
})
export class AppRoutingModule { }
