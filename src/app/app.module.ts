import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VeiculoNewComponent } from './components/veiculo-new/veiculo-new.component';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculoService } from './services/veiculo.service';
import { DialogService } from './dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    VeiculoNewComponent,
    VeiculoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [
    VeiculoService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
