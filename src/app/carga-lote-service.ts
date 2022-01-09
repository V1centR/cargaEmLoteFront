import {HttpClient} from '@angular/common/http'

export class CargaLoteService {

    constructor(private http: HttpClient){
    }



    setLotes(){


    }


    getLotes(){

        return this.http.get("http://127.0.0.1/api/cargalote/lotes");

    }

    uploadLote(){


    }


}
