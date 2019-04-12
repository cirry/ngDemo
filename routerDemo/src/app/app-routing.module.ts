import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'product', component: ProductComponent},
  // {path: 'newscontent', component: NewscontentComponent},
  {path: 'newscontent/:aid', component: NewscontentComponent},
  {path: 'productcontent/:aid', component: ProductcontentComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
