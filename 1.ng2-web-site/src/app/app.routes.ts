import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'about',
            component: AboutComponent
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {

}