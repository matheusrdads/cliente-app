import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [           //importando componentes
    NavbarComponent,
    SidebarComponent
  ],
  imports: [                //importando outros modulos ou modulos de terceiros
    CommonModule,
    RouterModule            //module que permite usar rotas e
  ],
  exports: [                //exportando componentes
    NavbarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }
