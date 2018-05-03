import{Routes, RouterModule} from '@angular/router'
import{HomeComponent} from './components/home/home.component'
import{ VeiculoNewComponent } from './components/veiculo-new/veiculo-new.component'
import { ModuleWithProviders } from '@angular/core';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';

export const ROUTES: Routes = [

    {path : '', component : HomeComponent},
    {path : 'veiculo-novo', component : VeiculoNewComponent},
    {path : 'veiculo-novo/:id', component : VeiculoNewComponent},
    {path : 'veiculo-list', component : VeiculoListComponent}

]


export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);