import { PessoJuridica } from "./PessoJuridica";
import { PessoaFisica } from "./PessoaFisica";

export class NotaFiscal{

    private numeroNotaFiscal: string;
    public PessoaF = new PessoaFisica("", "");
    public PessoaJ = new PessoJuridica("","");

    constructor(_numeroNotaFiscal: string){
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public setNumeroNotaFiscal (_numeroNotaFiscal:string):void{
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }

    public getNumeroNotaFiscal():string{
        return this.numeroNotaFiscal;
    }

}