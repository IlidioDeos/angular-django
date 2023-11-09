import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [{id: 'Member ID' ,name: 'Member 1', phone:'', email:'Member Email', profile_image:''}];


  constructor(private api:ApiService, private router: Router) {
    this.getMembers();
   }
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log(error);
      }
    )
  };

  memberClicked = (member: any) => {
    this.router.navigate(['members-details', member.id]);
  };
};
