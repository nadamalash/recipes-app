import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, FeaturesModule, RouterModule],
  providers: [...appConfig.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
