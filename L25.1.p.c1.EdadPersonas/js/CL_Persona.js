export default class CL_Persona {

    constructor(){
        this.acEdad = 0;
        this.cntPersonas = 0;
    }
    procesarEdad(ed){
        this.acEdad += ed.edad;
        this.cntPersonas++;
    }
    calcularPromedio(){
        return this.acEdad / this.cntPersonas;
    }
}