import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private appComponent: AppComponent) { }
  selectedMember = { id: '', name: '', email: '', phone: '', address: '', city: '', state: '', zipcode: '', created: '', updated: '', profile_image: '' };
  selectedId: any;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id')!);
      this.selectedId = id;
      this.loadMember(id);
    });
  }

  loadMember(id: any) {
    this.api.getMember(id).subscribe(
      data => {
        // console.log(data);
        this.selectedMember = data;
      },
      error => {
        console.log(error, "Error");
      });
  };

  updateMember() {
    this.api.updateMember(this.selectedMember).subscribe(
      data => {
        this.selectedMember = data;
      },
      error => {
        console.log("Error", error);
      });
  };

  newMember() {
    this.router.navigate(['new-member']);
  }

  deleteMember() {
    this.api.deleteMember(this.selectedId).subscribe(
      data => {
        let index: any;

        this.appComponent.members.forEach((e: any, i: any) => {
          if (e.id === this.selectedId)
            index = i;
          });

        this.appComponent.members.splice(index, 1);

      },
      error => {
        console.log("Error", error);
      }
    );
  };


}
