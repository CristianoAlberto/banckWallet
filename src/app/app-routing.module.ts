import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CamaraComponent } from './camara/camara.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { MoreComponent } from './more/more.component';
import { InformationComponent } from './information/information.component';
import { ActivityComponent } from './activity/activity.component';
import { CardsCarouselComponent } from './cards-carousel/cards-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mainView',
    component: MainViewComponent
  },
  {
    path: 'camara',
    component: CamaraComponent
  },
  {
    path: 'definition',
    component: DefinitionsComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
