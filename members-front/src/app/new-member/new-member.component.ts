import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  member = { name: '', email: '', phone: '', address: '', city: '', state: '', zipcode: ''};
  
  constructor(private api: ApiService, private appComponent: AppComponent) { }

  ngOnInit()  {
}

  save(){
    this.api.newMember(this.member).subscribe(
      data => {
        this.appComponent.members.push(data);
      },
      error => {
        console.log(error, "Error");
      });
  }

}
