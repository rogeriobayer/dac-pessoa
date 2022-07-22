import { Routes } from "@angular/router";
import { Login } from "../shared";
import { LoginComponent } from "./login/login.component";


export const LoginRoutes: Routes = [
    {path: 'login', component: LoginComponent}
]