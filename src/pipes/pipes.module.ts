import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchPipe } from './search/search';
@NgModule({
	declarations: [SearchPipe],
	imports: [IonicModule],
	exports: [SearchPipe]
})
export class PipesModule {}
