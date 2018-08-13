import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: EmployeesComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
