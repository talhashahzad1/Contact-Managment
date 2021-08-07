import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/Services/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {

  id : any;
  contact : any;

  constructor(
    public route :ActivatedRoute,
    public cs : ContactsService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe(params=>{
      this.id = Number(params['id']);
      this.getContact();
    })
    
  }

  getContact(): void {
    this.cs.getContactList().subscribe((res) => {
      this.contact = res.contacts.find((x : any) => x.id == this.id)
      console.log(this.contact)
    })
    
  }

}
