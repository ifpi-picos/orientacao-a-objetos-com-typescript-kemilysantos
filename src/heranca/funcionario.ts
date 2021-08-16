export class Funcionario{
    protected nome: string
    protected salario: number
    protected beneficios: Array<string>
    

    constructor(nome: string, salario: number){
        this.nome = nome
        this.salario = salario
    }

    public getNome(): string{
        return this.nome
    }
    public setNome(nome: string): void{
        this.nome = nome
    }
    getSalario(): number{
        return this.salario
    }
    public getBeneficios(): Array<string>{
        return this.beneficios
    }
    public getSalarioLiquido(): number{
        return this.salario
    }
    

}