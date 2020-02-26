import { Injectable } from '@angular/core'; 
import { FormGroup, FormControl, Validators }
  from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {User} from '../modele/user.modele';
@Injectable({ providedIn: 'root' }) export class UserService {
  private url=" http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  

  findAll(){
    return this.http.get<User[]>(this.url);

  }
  delete(id){
    return this.http.delete(`$(this.url)/${id}`)

  }
  add(user){
    return this.http.post<User>(this.url, user);
  }
update(user){
  return this.http.put(`${this.url}/${user.key}`, user);
}

  form: FormGroup = new FormGroup({ id: new FormControl(null), fullName: new FormControl('', Validators.required), email: new FormControl('', Validators.email), mobile: new FormControl('', [Validators.required, Validators.minLength(8)]), city: new FormControl(''), gender: new FormControl('1'), department: new FormControl(0), hireDate: new FormControl(''), isPermanent: new FormControl(false) });

  initializeFormGroup() {
    this.form.setValue({  id: null, fullName: '', email: '', mobile: '', city: '', gender: '1', department: 0, hireDate: '', isPermanent: false });
  }

} 