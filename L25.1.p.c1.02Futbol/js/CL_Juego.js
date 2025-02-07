export default class CL_Juego{
    constructor(partido){
        this.partido = partido;
    }

    set partido(partido){
        this._partido = partido;
    }

    get partido(){
        return this._partido;
    }
}