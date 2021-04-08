import { Component, OnInit } from '@angular/core';
import {authentication} from '../../services/authentication.service'
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

email : string = ""
password : string = ""
alertCheck:boolean=false;
  constructor(private authservice: authentication) { }

  ngOnInit(): void {
  }
  getEmail (event : Event){
    const {target} = event
    this.email = (target as HTMLButtonElement).value
  }
  getPassword (event : Event){
    const {target} = event
    this.password = (target as HTMLButtonElement).value
  }
  onsubmit() {
    this.authservice.login(this.email, this.password).subscribe((data:any) => {
      console.log(data)
      if(data.message == 'succeess'){
        document.location.href="/";
          }else{
        console.log('herer')
        this.alertCheck = true;
      }
    })
  }

 


  
}
