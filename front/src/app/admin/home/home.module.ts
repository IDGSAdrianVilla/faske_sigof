import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeRoutes } from "./home.routes";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(HomeRoutes),
        ModalModule.forChild()
    ]
})

export class HomeModule {}