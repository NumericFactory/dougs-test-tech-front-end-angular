import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovementComponent } from './movement-list/movement-list.component';
import { NavbarComponent } from './navbar/navbar.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ItemMovementComponent } from './movement-list/components/item-movement/item-movement.component';
import { ItemBalanceComponent } from './movement-list/components/item-balance/item-bank-balance.component';
import { GenerateDataFormComponent } from './navbar/components/generate-data-form/generate-data-form.component';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { ValidationActionsComponent } from './navbar/components/validation-actions/validation-actions.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MovementComponent,
    NavbarComponent,
    ItemMovementComponent,
    ItemBalanceComponent,
    GenerateDataFormComponent,
    ValidationActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: localeFr, useValue: 'fr-FR' }  // <-- Locale for France],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
