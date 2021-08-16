import { Funcionario } from "./funcionario";

export class PJ extends Funcionario{
    private cnpj: string;

    constructor(nome: string, salario: number, cnpj:string){
        super(nome, salario);
        this.cnpj = cnpj;
        this.beneficios = ["Plano de saude"]

    }
    getCnpj(){
        return this.cnpj
    }
    public getSalarioLiquido(): number{
        return this.salario - (this.salario * 0.1);
    }

}