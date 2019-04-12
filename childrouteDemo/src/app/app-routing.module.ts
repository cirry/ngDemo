import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { PlistComponent } from './components/product/plist/plist.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent,
    children: [
      {path : 'welcome', component: WelcomeComponent},
      {path : 'setting', component: SettingComponent},
      {path : '**', component : WelcomeComponent}
    ]
  },
  {path : 'product', component: ProductComponent,
    children: [
      {path : 'cate', component: PcateComponent},
      {path : 'list', component: PlistComponent},
      {path : '**', component : PcateComponent}
    ]
  },
  {path : '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
