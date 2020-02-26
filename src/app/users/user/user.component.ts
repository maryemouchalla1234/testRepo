import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modele/user.modele';
@Component({
 selector: 'app-user',
 templateUrl: './user.component.html',
 styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 constructor(private service: UserService) { }

 private user:User={
  
  fullName:'',
  email:'',
  mobile:'',
  city:'',
  gender:'',
  departement:'',
  hireDate:'',
  isPermanent:true
  
}

users:User[]=[

]

add()
{
  this.service.add(this.user).subscribe((user)=>this.users=[user,...this.users]);
}

onSubmit()
{
  if(this.service.form.valid)
  {
    this.user = this.service.form.value;
    console.log(this.user);
    this.add();
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}

departments = [
 { id: 3, value: 'Dep 1' },
 { id: 2, value: 'Dep 2' },
 { id: 3, value: 'Dep 3' }];
 onClear(){
 this.service.initializeFormGroup();
 this.service.form.reset();
 }
 ngOnInit() {
 }
}