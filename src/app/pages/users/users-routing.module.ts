import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";

const routes: Routes = [
    {
        path: '', component: UsersComponent, children: [
            {
                path: '', redirectTo: 'list', pathMatch: 'full'
            },
            {
                path: 'list', component: UserListComponent
            },
            {
                path: 'add', component: UserFormComponent
            },
            {
                path: 'edit/:id', component: UserFormComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}