import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandComponent } from './command/command.component';
import { FicherLogComponent } from './ficher-log/ficher-log.component';



const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full'},
 
  { path: 'command', component: CommandComponent},
  { path: 'ficherLog', component: FicherLogComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
