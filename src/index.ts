import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

export * from './app.component';
export * from './app.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppComponent,
  ],
  exports: [
    AppComponent,
  ]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [AppService]
    };
  }
}
