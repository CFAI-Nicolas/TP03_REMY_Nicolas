import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez le module FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [AppComponent, CatalogComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule], // Ajoutez le module FormsModule
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
