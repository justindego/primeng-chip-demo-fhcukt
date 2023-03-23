import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { ChipModule } from "primeng/chip";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChipModule,
    ButtonModule,
    BadgeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
