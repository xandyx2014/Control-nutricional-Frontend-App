import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { PacienteService } from 'src/app/services/paciente.service';
import { Historial } from 'src/app/interface/historial.interface';
import { format, formatISO } from 'date-fns';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  private subscription = new Subscription();
  public historial: Historial[] = [];
  constructor(
    private menuCtrl: MenuController,
    private activateRoute: ActivatedRoute,
    private pacienteService: PacienteService,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.subscription.add(
      this.activateRoute.params
        .pipe(
          switchMap(({ id }) => this.pacienteService.historial(id))
        )
        .subscribe( resp =>  {
          this.historial = resp;
          // console.log(resp);
        })
    );
    this.menuCtrl.enable(true);
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  fecha(date: string) {
    const formatDate = formatISO(new Date(date), { representation: 'date' });
    // console.log();
    console.log(formatDate);
    return formatDate;
  }

}
