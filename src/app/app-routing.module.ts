import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccinfoComponent } from './accinfo/accinfo.component';
import { DateComponent } from './date/date.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LastpgComponent } from './lastpg/lastpg.component';
const routes: Routes = [{
  path:"header",
  component:HeaderComponent},
    {
      path:"date",
      component:DateComponent},
      {
        path:"accinfo",
        component:AccinfoComponent},
        {
          path:"footer",
          component:FooterComponent},{
            path:"lastpg",
            component:LastpgComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }