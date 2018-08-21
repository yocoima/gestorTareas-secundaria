import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from '../../servicios/conexionbd.service';
import { Tareas } from '../../models/tareas';
import { Urls } from '../../models/urls';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Clasificacion, Importancia, Periodo } from '../../models/clasificacion';
import * as moment from 'moment';


@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html'
})


export class NewTareaComponent implements OnInit {


imprimirVarlor(){

}

// Para llenar los combos
 hora:string = moment().format('L');
 ComboClasificacion: string []=[];
 ComboImportancia: string []=[];
 ComboPeriodo: string[]= [];
 SeleccionClasificacion: string;
 SeleccionImportancia: string;
 SeleccionPerido: string;
 date = moment();

  constructor(private conexionbdService: ConexionbdService,
              private toastr: ToastrService ) {

  console.log(this.hora);
  let urlClasificacion:string =
  "https://appangular-1e41c.firebaseio.com/clasifiacion.json";
  let UrlImportancia:string =
  "https://appangular-1e41c.firebaseio.com/importancia.json";
  let urlPeriodo:string =
  "https://appangular-1e41c.firebaseio.com/periodo.json";

// combo clasificacion
  conexionbdService.getobjects(urlClasificacion).subscribe(
  clasificacionTarea => {
    Object.keys(clasificacionTarea).forEach(
      key => {
        this.ComboClasificacion.push(key);
        }
      )
    }
  )

// combo Importancia
conexionbdService.getobjects(UrlImportancia).subscribe(
  importanciaTarea => {
    Object.keys(importanciaTarea).forEach(
      key => {
        this.ComboImportancia.push(key);
      }
    )
  }
)
    conexionbdService.getobjects(urlPeriodo).subscribe(
        periodosTarea => {
            Object.keys(periodosTarea).forEach(
              key => {
              this.ComboPeriodo.push(key);
              }
            )
          }
        );
   }

  ngOnInit() {
    this.conexionbdService.getTareas();
    this.resetForm()
  }

  guardar(newTarea: NgForm){
    console.log(newTarea.value);
    this.conexionbdService.insertTarea(newTarea.value);
    this.resetForm(newTarea);
    this.toastr.success('Nueva Tarea Creada');

  }
  borrar(newTarea: NgForm){
    if (confirm("Esta seguro que desea borrar la tarea?")){
      this.conexionbdService.deleteTarea(newTarea.value);
      this.toastr.success('Tarea Eliminada');
    }
  }

  resetForm(newTarea?: NgForm){
    if(newTarea != null)
    newTarea.reset();
    this.conexionbdService.selectedTarea = new Tareas();
  }

}
