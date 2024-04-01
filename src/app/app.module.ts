import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { CancelComponent } from './pages/cancel/cancel.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SuccessComponent } from './pages/success/success.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CartItemCardComponent } from './pages/cart/components/cart-item-card/cart-item-card.component';
import { QuantityStepperComponent } from './pages/cart/components/quantity-stepper/quantity-stepper.component';
import { BtnContinueComponent } from './pages/home/components/btn-continue/btn-continue.component';
import { DealsComponent } from './pages/home/components/deals/deals.component';
import { ProductCardComponent } from './pages/home/components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopBarComponent,
    CancelComponent,
    CartComponent,
    HomeComponent,
    SuccessComponent,
    TruncatePipe,
    CartItemCardComponent,
    QuantityStepperComponent,
    BtnContinueComponent,
    DealsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
