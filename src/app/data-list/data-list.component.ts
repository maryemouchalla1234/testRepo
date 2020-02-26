import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { UserService } from '../services/user.service';
import { UserComponent } from '../users/user/user.component';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataSource = new MatTableDataSource<UserComponent>();
  displayedColumns: string[] = ['id', 'fullName', 'email', 'mobile', 'city', 'gender', 'departement', 'hireDate', 'isPermanant'];
  constructor(private service:UserService) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements(){
    this.service.findAll().subscribe(
    
      res=>{
          if(!res)return;
          console.log(res);
          this.dataSource = new MatTableDataSource<UserComponent>(res as any);
      }
    )
  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
