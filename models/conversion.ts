export class ConversionGrad {
    grados: number;
    tipo: string;
    result: number;
    respaldo: number;

    constructor(grados : number, tipo : string) {
        this.grados = grados;
        this.tipo = tipo;
        this.result = 0;
        this.respaldo = this.grados;
        switch (tipo) {
            case ('Celsius') : this.result = ((this.grados * 9) / 5) + 32; break;
            case ('Fahrenheit') : this.grados = ((this.grados - 32) * 5) / 9; this.result = this.respaldo; break; 
        }
    }
}