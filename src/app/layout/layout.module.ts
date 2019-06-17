import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    LayoutRoutingModule
  ],
  exports : [
  ],
  declarations: [LayoutComponent, TopnavComponent, SidenavComponent ]
})
export class LayoutModule { }
