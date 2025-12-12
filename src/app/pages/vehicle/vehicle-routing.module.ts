import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehicleComponent } from "./vehicle.component";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { VehicleFormComponent } from "./vehicle-form/vehicle-form.component";

const routes: Routes = [
    {
        path: '', component: VehicleComponent, children: [
            {
                path: '', redirectTo: 'list', pathMatch: 'full'
            },
            {
                path: 'list', component: VehicleListComponent
            },
            {
                path: 'add', component: VehicleFormComponent
            },
            {
                path: 'edit/:id', component: VehicleFormComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VehicleRoutingModule {}