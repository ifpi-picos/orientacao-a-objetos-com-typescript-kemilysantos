import { Funcionario } from "./funcionario"

export class Empresa{
    private nome: string
    private funcionarios: Funcionario[]

    constructor(nome:string){
        this.nome = nome;
        this.funcionarios = []
    }

    public getNome(): string{
        return this.nome
    }
    public setNome(nome:string): void{
        this.nome = nome
    }
    public getFuncionarios(): Funcionario[]{
        return this.funcionarios
    }
    public setFuncionarios(funcionario: Funcionario): void{
        this.funcionarios.push(funcionario)
    }

}