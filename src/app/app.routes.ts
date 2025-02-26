import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AIStylistComponent } from './ai-stylist/ai-stylist.component';
import { ShopComponent } from './shop/shop.component';
import { DonateComponent } from './donate/donate.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"Home",component:HomeComponent},
    {path:"stylist",component:AIStylistComponent},
    {path:"shop",component:ShopComponent},
    {path:"donate",component:DonateComponent}
];
