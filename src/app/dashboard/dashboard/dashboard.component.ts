import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/Services/contacts.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public contactList : any[]  = [];
  public filterList  : any[]  = [];
  public searchTerm  : string = "";
  public search : boolean = true;
  constructor(
    public cs : ContactsService,
    public router: Router 
  ) { }

  ngOnInit(): void {
    this.getContactList()
  }
   

  getContactList(){
    this.cs.getContactList().subscribe((res) => {
      console.log(res)
      this.contactList = res.contacts;
      this.filterList  = this.contactList; 
    })
  };

  selectContact(id : any){
    this.router.navigateByUrl(`dashboard/contact-detail/${id}`);
  }

  searchContact(){
    let term = this.searchTerm;
    this.filterList = this.contactList.filter(x=>x.firstName.toLowerCase().search(term.toLowerCase()) != -1 || x.phone == term);
    if(this.filterList.length == 0){
      this.contactList.forEach(contact=>{
        let cnt = contact.email.find((x:any) => x == term);
        if(cnt){
          this.filterList.push(contact);
        }
      })
    }
    this.search = false;
  }

  clearSearch(){
    this.searchTerm = "";
    this.filterList  = this.contactList; 
    this.search = true;
  }

}
