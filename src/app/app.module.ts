import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { signUpComponent } from './signUp/signUp.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    signUpComponent,
    CurrencyComponent,
    ExchangeComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
    BreadcrumbsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', data: { name: 'Home' }, component: ProductListComponent },
      { path: 'products/:productId', data: { name: 'Product' }, component: ProductDetailsComponent },
      { path: 'cart', data: { name: 'Cart' }, component: CartComponent },
      { path: 'shipping', data: { name: 'Shipping' }, component: ShippingComponent },
      { path: 'whishlist', data: { name: 'Wish list' }, component: WishlistComponent },
      { path: 'signUp', data: { name: 'SignUp' }, component: signUpComponent },
      { path: 'currency', data: { name: 'Currency' }, component: CurrencyComponent },
      { path: 'exchange', data: { name: 'Exchange' }, component: ExchangeComponent },
      { path: 'dashboard', data: { name: 'Dashboard' }, component: DashboardComponent },
      { path: 'dashboard/news', data: { name: 'News' }, component: NewsComponent },
      { path: 'dashboard/news/:articleId', data: { name: 'Article' }, component: ArticleComponent },
      { path: 'error', data: { name: 'Error' }, component: ErrorComponent },
      { path: '**', redirectTo: 'error' },
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }