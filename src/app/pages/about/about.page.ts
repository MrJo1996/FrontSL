import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api.service';
import { Sessione } from 'src/app/session/sessione';
import { createElement } from '@angular/core/src/view/element';



@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  private scadenze_data = []; //array che conterrà dati delle prossime X scadenze da stampare
  private categorie = [];
  private scadenze_categoria = [];
  private cod_categoria: number;
  private btn_visualizzaPerData: boolean;
  private btn_visualizzaCategorie: boolean;
  private btn_visualizza: boolean;

  private cod_scadenza: number; //PREnderà valore


  constructor(
    public navCtrl: NavController,
    public apiService: ApiService,
    public session: Sessione
  ) {
  }

  ngOnInit() {
    this.btn_visualizzaCategorie = false;
    this.btn_visualizzaPerData = false;
    this.btn_visualizza = false;
  }

  VisualizzaCategorie() {
    this.btn_visualizzaPerData = false;
    this.btn_visualizza = false;
    this.btn_visualizzaCategorie = true;
    this.apiService.getCategorie().then(
      (categorie) => {
        this.categorie = categorie;
      },
      (rej) => {
        this.categorie = [];
      }
    );

    //this.cod_scadenza=59; //TEST
  }

<<<<<<< HEAD
  ngOnInit() {
    this.visualizzaScadenzePerData();
  }

  modificaApprofondita() {
    this.navCtrl.navigateRoot('/modifica-scadenza');
  }

  confermaPagamento() {
    this.apiService.confermaPagamento(this.cod_scadenza).then(
      (result) => {
        console.log("CONFERMATO", this.cod_scadenza);
      },
      (rej) => {
        console.log("NON VA IL CONFERMA",this.cod_scadenza);
      }
    );
  }

  annullaPagamento() {
    this.apiService.annullaPagamento(this.cod_scadenza).then(
      (result) => {
        console.log("ANNULLATO",this.cod_scadenza);
      },
      (rej) => {
        console.log("NON VA L' ANNULLATO",this.cod_scadenza);
      }
    );
  }

  ///// // // //

  goToVisualizzaCategorie() {

  }


=======
>>>>>>> 561742f54c6d11b0662ecef7584f2e6decb42214

  visualizzaScadenzePerData() {
    this.btn_visualizzaCategorie = false;
    this.btn_visualizza = false;
    this.btn_visualizzaPerData = true;
    this.apiService.getScadenzePerData(this.session.codiceUtente).then(
      (scadenzeData) => {
        this.scadenze_data = scadenzeData['data'],
          console.log('visualizzato.');
      },
      (rej) => {
        this.scadenze_data = [],
          console.log('REJECT');
      }
    );
  }

  visualizzaScadenzePerCategoria(){
    this.btn_visualizzaCategorie = false;
    this.btn_visualizzaPerData = false;
    this.btn_visualizza = true;
    this.apiService.getScadenzePerCategoria(this.cod_categoria, this.session.codiceUtente).then(
      (scadenzeCategoria) => {
        this.scadenze_categoria = scadenzeCategoria;
        console.log('scadenze cat', this.scadenze_categoria);
      },
      (rej) =>{
        this.scadenze_categoria = [],
        console.log('erroreeeeeee');
      }
    );
  }

}
