import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [{id: 'Member ID' ,name: 'Member 1', email:'Member Email'}];


  constructor(private api:ApiService) {
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
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  };
};
