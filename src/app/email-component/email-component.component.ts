import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.css']
})
export class EmailComponentComponent implements OnInit {

  data=
  {
   to:"",
   subject:"",
   message:""

  }
 
  flag=false;

  constructor(private emailcomponent:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
    console.log("Send Email..");
    console.log(this.data);
     
    if(this.data.to=='' || this.data.subject==' ' || this.data.message=='')
    {
      this.snak.open("Fields can not be empty!!", "Ok");
      return;
    }


    this.flag=true;
    this.emailcomponent.sendEmail(this.data).subscribe(
     response=> {
                console.log(response);
                this.flag=false;
                this.snak.open("Email Sent Succcessfully !!!","Ok");
      },
      error =>
      {
           console.log(error);
           this.flag=false;
           this.snak.open("Error !!!","Ok");
      }
    )
    
   
    
  }
}
