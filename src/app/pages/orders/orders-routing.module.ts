import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderFormComponent } from "./order-form/order-form.component";

const routes: Routes = [
    {
        path: '', component: OrdersComponent, children: [
            {
                path: '', redirectTo: 'list', pathMatch: 'full'
            },
            {
                path: 'list', component: OrderListComponent
            },
            {
                path: 'add', component: OrderFormComponent
            },
            {
                path: 'edit/:id', component: OrderFormComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrderRoutingModule {}