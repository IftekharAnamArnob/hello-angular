import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
   
    //default routing
    {
        path: '',
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },

     {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: "app-data-binding",
                component: DataBindingComponent,
                canActivate: [authGuard]
            },
            {
                path: "add-employee",
                component:AddEmployeeComponent
            },
            {
                path: "employee-list",
                component: EmployeeListComponent
            },
            {
                path:"reactive-forms",
                component:ReactiveFormsComponent
            },
            {
                path:"get-api",
                component: GetApiComponent
            },
            {
                path:"post-api",
                component: PostApiComponent
            },
            {
                path: "CombineLatest",
                component: CombineLatestComponent
            },
            {
                path: "reactive-form",
                component: ReactiveFormComponent
            },
            {
                path: "ng-template",
                component: NgTemplateComponent
            },
            {
                path:"ng-container",
                component: NgContainerComponent
            }
        ]
     }
];
