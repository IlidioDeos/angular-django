import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  selectedMember = { id: '', name: '', email: '', phone: '', created: '' };

  ngOnInit() {
    this.loadMember();
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.api.getMember(id).subscribe(
      data => {
        console.log(data);
        this.selectedMember = data;
      },
      error => {
        console.log(error, "Error");
      });
  };

}
