import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

const routes: Routes = [{path:'', component: HomeComponent },
{path:'products', component: ProductsComponent },
{path:'shopping-cart', component: ShoppingCarComponent },
{path:'check-ou', component: CheckOutComponent },
{path:'order-sucess', component: OrderSucessComponent },
{path:'login', component: LoginComponent },
{path:'admin/products', component: AdminProductsComponent },
{path:'admin/orders', component: AdminOrdersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
