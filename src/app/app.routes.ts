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


export const routes: Routes = [
   
    {
        path: "app-data-binding",
        component: DataBindingComponent
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
    }


];
