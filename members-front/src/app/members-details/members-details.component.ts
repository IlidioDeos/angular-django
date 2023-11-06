import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from './api.service';


@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
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
}
