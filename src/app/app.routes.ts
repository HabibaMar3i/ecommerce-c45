import { Routes } from '@angular/router';
import { AuthlayoutComponent } from './core/layouts/authlayout/authlayout.component';
import { BlanklayoutComponent } from './core/layouts/blanklayout/blanklayout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { BrandsComponent } from './features/brands/brands.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductdetailsComponent } from './features/productdetails/productdetails.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/cart/cart.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { OrdersComponent } from './features/orders/orders.component';
import { NotfoundComponent } from './features/notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '', component: AuthlayoutComponent, title: 'Auth Layout', children: [
        {path:'login', component: LoginComponent, title: 'Login'},
        {path:'register', component: RegisterComponent, title: 'Register'},
    ]},
    {path: '', component: BlanklayoutComponent, title: 'Blank Layout', children: [
        {path:'home', component: HomeComponent, title: 'Home'},
        {path:'brands', component: BrandsComponent, title: 'Brands'},
        {path:'categories', component: CategoriesComponent, title: 'Categories'},
        {path:'products', component: ProductsComponent, title: 'Products'},
        {path:'productdetails/:slug/:id', component: ProductdetailsComponent, title: 'Product details'},
        {path:'cart', component: CartComponent, title: 'Cart'},
        {path:'wishlist', component: WishlistComponent, title: 'Wishlist'},
        {path:'checkout', component: CheckoutComponent, title: 'Checkout'},
        {path:'orders', component: OrdersComponent, title: 'Orders'},
    ]},
    {path: '**', component: NotfoundComponent, title: '404 Not Found'},
];
