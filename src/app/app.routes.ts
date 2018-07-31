import { RouterModule, Routes } from '@angular/router';
import { NewTareaComponent } from './components/new-tarea/new-tarea.component';
import { BitacoraTareasComponent } from './components/bitacora-tareas/bitacora-tareas.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { MantenedorComponent } from './components/mantenedor/mantenedor.component';
import { MomentjsComponent } from './components/momentjs/momentjs.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './servicios/auth-guard.service';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'new-tarea', component: NewTareaComponent, canActivate:[AuthGuardService] },
  { path: 'bitacora-tareas', component: BitacoraTareasComponent, canActivate:[AuthGuardService] },
  { path: 'mantenedor', component: MantenedorComponent, canActivate:[AuthGuardService] },
  { path: 'momentjs', component: MomentjsComponent, canActivate:[AuthGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
