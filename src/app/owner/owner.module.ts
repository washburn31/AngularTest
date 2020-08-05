import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing.module';
import { MaterialModule } from 'src/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountDataComponent } from './owner-details/account-data/account-data.component';
import { OwnerDataComponent } from './owner-details/owner-data/owner-data.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AccountDataComponent,
    OwnerDataComponent,
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerCreateComponent,
  ],
  imports: [
    CommonModule,
    // RouterModule
    OwnerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class OwnerModule {}
