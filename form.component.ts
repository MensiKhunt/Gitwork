
import { Component, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router'
import { Student } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // employee = {
  //   id: "",
  //   name: "",
  //   address: "",
  //   gender: "",
  //   cars: "",
  //   doj: "",
  //   hobbies: ""
  //}
  // editMode : any = true;
  // employees: any[] = [];
  // myForm: any;
  editid: any;
  model = new Student();


  
  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe((data: any) => {
      if (data && data.id) {
        this.editid = Number(data.id);
        console.log(this.editid);
      }
    });
    // if (this.employee && this.employee.id) {
    //   this.editid = Number(this.employee.id)
    //   console.log(this.employee)
     
    //}
    //console.log(this.employees)
  }

  ngOnInit(): void {
    if (this.editid) {
      let jsonarray = JSON.parse(localStorage.getItem('formsdata'));
      if (jsonarray) {
        let object = jsonarray.find(((x: { id: number, }) => x.id == this.editid));
        if (object) {
          this.model = object;
         // this.employees.concat(this.employee)
      //    localStorage.setItem('formsdata',JSON.stringify(this.employees))
          //  this.res = Object.keys(this.employee).map(index=>{
          //   let x= this.employee[index]
          //   return x;
    
         // })
        
          // this.employees.push(this.employee)
         // localStorage.setItem('formsdata',JSON.stringify(this.employees))
        }
       }
    } 
  }
  onSubmit() {
    if(this.editid)
    {
      // this if section execute for edit record 
      let editobject = JSON.parse(localStorage.getItem('formsdata') as any);
      let i = editobject.findIndex((x: { id: any; })=>x.id === this.editid);
      editobject[i]= this.model;
      let x=localStorage.setItem('formsdata',JSON.stringify(editobject));
      console.log(x)
    }
    else {
      //this else section execute for save data only section 
    let jsonArray = JSON.parse(localStorage.getItem('formsdata')as any)
    if(!jsonArray){
      jsonArray=[];

    }
    this.model.id = Math.floor(Math.random()*100)
    jsonArray.push(this.model)
    localStorage.setItem('formsdata', JSON.stringify(jsonArray));
    }
     // this.employees = [...this.employees, this.employee];
    // this.employee = { id: '', name: '', address: '', gender: '', cars: '', doj: '', hobbies: '' };
    // localStorage.setItem('formsdata', JSON.stringify(this.employees));

  }
  showdata() {
    this.router.navigateByUrl('/list');
    }
}
