import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailsComponent } from './members-details/members-details.component';

const routes: Routes = [
  {path: 'members-details/:id', component: MembersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ MembersDetailsComponent, ]
