import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailsComponent } from './members-details/members-details.component';
import { NewMemberComponent } from './new-member/new-member.component';

const routes: Routes = [
  {path: 'members-details/:id', component: MembersDetailsComponent},
  {path: 'new-member', component: NewMemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ MembersDetailsComponent, ]
