import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from '../../servicios/conexionbd.service';
import { MomentjsComponent } from '../../components/momentjs/momentjs.component';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Tareas } from '../../models/tareas';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bitacora-tareas',
  templateUrl: './bitacora-tareas.component.html'
})
export class BitacoraTareasComponent implements OnInit {

  hora:string;
  fech:string;
  tareas: any []=[];
  tareaList: Tareas [];

  constructor(private _conexionbdService: ConexionbdService,
              private _tarea: Tareas,
              private toastr: ToastrService
  ) {
    this.fech  = moment().format('L');
    this.hora = moment().format('LT');
}
//   {
//     let url:string = "https://appangular-1e41c.firebaseio.com/tareas.json";
//     this._conexionbdService.getobjects(url).subscribe(
//     data => {
//       // console.log(data);
//       for( let  key$ in data ){
//         // console.log(data[key$]);
//         this.tareas.push( data[key$]);
//       }
//     })
// }

// borrar(key$:string){
// let url:string = "https://appangular-1e41c.firebaseio.com/tareas.json";
//   this._conexionbdService.getobjects(url).subscribe(
//   data => {
//     // console.log(data);
//     for( let  key$ in data ){
//       console.log(data[key$]);
//       this._conexionbdService.deleteTarea(data[key$]);
//   }
// })
// }
ngOnInit() {
  return this._conexionbdService.getTareas()
  .snapshotChanges().subscribe(item => {
    this.tareaList = [];
    item.forEach(element => {
      let x = element.payload.toJSON();
      x["key$"] = element.key;
      this.tareaList.push(x as Tareas);
    });
  });
}

borrar(key$:string){
  if (confirm("Esta seguro que desea borrar la tarea?")){
    this._conexionbdService.deleteTarea(key$);
    this.toastr.success('Tarea Eliminada');
    }
  }

  realizado(key$:string){
    
  }

}
