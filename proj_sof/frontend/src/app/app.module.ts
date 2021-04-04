import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPerdaComponent } from './components/add-perda/add-perda.component';
import { PerdaDetailsComponent } from './components/perda-details/perda-details.component';
import { PerdasListComponent } from './components/perdas-list/perdas-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';
import { AgmCoreModule } from '@agm/core';
import {MatTableDataSource} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    AddPerdaComponent,
    PerdaDetailsComponent,
    PerdasListComponent,
    DialogErrorComponent,
    DialogMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDialogModule,
    MatTableDataSource,
    NgxMaskModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcWwZUp2n5usm0Ae4_DJfQ30L3sCtBzko'
    })
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
