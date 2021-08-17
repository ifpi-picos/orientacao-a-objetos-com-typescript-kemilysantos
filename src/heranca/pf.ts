import { Funcionario } from "./funcionario";

export class PF extends Funcionario{
    private cpf: string;

    constructor(nome: string, salario: number, cpf:string){
        super(nome, salario);
        this.cpf = cpf;
        this.beneficios = ["Plano de saude", "vr", "ferias"]

    }
    public getCpf(): string{
        return this.cpf
    }

    public getSalarioLiquido(): number{
        return this.salario - (this.salario * 0.1);
    }
}

