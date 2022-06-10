
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Student } from '../form/form.model';
//import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // emp:any;
  // employee1 : any;
  // id: any;
  // editMode  : any=false;
  // employees: any[];
  // employee: { id: string; name: string; address: string; gender: string; cars: string; doj: string; hobbies: string; };
  data: Student[];
   
  constructor(private router:Router,private route : ActivatedRoute) {
    this.route.params.subscribe(data=>{
      console.log(data)
    }); 
    
      // if(this.emp && this.emp.id){
      //   this.editid = Number(this.emp.id)
      
  //   }
   }
 


  ngOnInit(): void {

   this.data=JSON.parse(localStorage.getItem('formsdata') as any);
   console.log(this.data); 
  //  console.log(this.employee1);
  //  this.emp = JSON.parse(this.employee1);
  }

  // 
  delete(i:number){
    this.data.splice(i,1);
    localStorage.setItem('formsdata',JSON.stringify(this.data))
  }

  
 edit(id:any){
   this.router.navigate(['/form',id])
  //JSON.parse(localStorage.getItem('formsdata') as any);
  //  if(this.editid){
  //    let jsonarray = JSON.parse(localStorage.getItem('formsdata'));
  //   if(jsonarray){
  //      let obj = jsonarray.find((x: {id : number,})=>x.id==this.editid)
  //     if(obj){
  //       this.employee=obj; 
  //     }}
  //   }
    

}

}
 
 
      
      // var str1 = JSON.parse(localStorage.getItem('formsdata'))
      // var str= this.employee1.concat(str1);
      // localStorage.setItem('formsdata',str);
      
   
  //  this.activatedroute.params.subscribe(id => {
  //   console.log(id);
  //  })
 //JSON.parse(localStorage.getItem('formsdata')as any);
  //this.router.navigateByUrl('/form');
  
  // if(this.id>=0){
  //   this.emp.splice(this.id,1);
  // }
  // localStorage.setItem('formsdata',JSON.stringify(this.emp));
  // console.log(this.emp);
  // this.employees =[...this.employees,this.employee];
  // this.employee={id: '',name : '',address:'',gender:'',cars:'',doj:'',hobbies:''};
  // localStorage.setItem('formsdata',JSON.stringify(this.employees));

  
 
 
 
 




