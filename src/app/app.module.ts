import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrandOverviewComponent } from './pages/brand/brand-overview/brand-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandService } from './pages/brand/shared/brandService';

@NgModule({
  declarations: [
    AppComponent,
    BrandOverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Forklift Application startup';
}
