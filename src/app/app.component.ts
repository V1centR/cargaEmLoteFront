import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Tela Carga em Lote';

  idlote: string;
  solicitante: string;
  esteira: string;
  status: string;
  dateRange_init: string;
  dateRange_end: string;


    constructor(){

    }
  

    execConsulta(){


      console.log("ID_LOTE::: " + this.idlote);
      console.log("SOLICITANTE::: " + this.solicitante);
      console.log("Estetira SELECTED::: " + this.esteira);
      console.log("STATUS SELECTED::: " + this.status);

      console.log("RANGE DATES::: " + this.dateRange_init +" - " +  this.dateRange_end);


    }




}
