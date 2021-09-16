import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { SelectCurrencyComponent } from './select-currency/select-currency.component';
import { SelectCurrencyService } from './services/select-currency.service';
import { SellPipe } from './pipes/sell.pipe';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptFormsModule],
  declarations: [AppComponent, HomeComponent, SelectCurrencyComponent, SellPipe],
  providers: [SelectCurrencyService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
