import { NgModule } from '@angular/core';
import { MedidaEdadPipe } from './medida-edad.pipe';
import { PesoMedidaPipe } from './peso-medida.pipe';
import { PesoEdadPipe } from './peso-edad.pipe';

@NgModule({
    declarations: [MedidaEdadPipe, PesoMedidaPipe, PesoEdadPipe],
    imports: [ ],
    exports: [MedidaEdadPipe, PesoMedidaPipe],
    providers: [],
})
export class EstadoNutricionPipeModule {}
