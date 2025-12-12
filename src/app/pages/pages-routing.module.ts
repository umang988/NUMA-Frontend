import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes : Routes = [
    { path: '', component: PagesComponent, children: [
        {
            path: '', redirectTo: 'dashboard', pathMatch: 'full'
        },
        {
            path: 'dashboard', component: DashboardComponent
        },
        {
            path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
        },
        {
            path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
        },
        {
            path: 'vehicle', loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule)
        }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}