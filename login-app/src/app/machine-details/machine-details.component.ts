import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
  import { from } from 'rxjs';
@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.css']
})
export class MachineDetailsComponent implements OnInit {
constructor(private router:Router){}

showTable:boolean=false;
  a: number;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  h: string;
  i: string;
  j: string;
  g: string;
  machineType: string;

  ngOnInit() {
  }
  onSelect(event){
    if(event.target.value=='m1'){
      this.machineType='m1';
    }
    if(event.target.value=='m2'){
      this.machineType='m2';
    }
    if(event.target.value=='m3'){
      this.machineType='m3';
    }
    
  }
  onClick(){this.showTable=true;
    if( this.machineType=='m1'){    this.a=1;
      this.b="System Date";
      this.c="System Time";
      this.d="Neha";
      this.e="Material Shortage";
      this.f="High";
      this.g="1";
      this.h="Pankaj";
      this.i="Machine Stopped";
      this.j="Increased Inventory for this material";
    }
    if( this.machineType=='m2'){    this.a=1;
      this.b="System Date";
      this.c="System Time";
      this.d="Praveen";
      this.e="Material Shortage";
      this.f="High";
      this.g="1";
      this.h="Subash";
      this.i="Machine Stopped";
      this.j="Increased Inventory for this material";
    }
    }
logout(){
  this.router.navigate(['\login']);
}
}
