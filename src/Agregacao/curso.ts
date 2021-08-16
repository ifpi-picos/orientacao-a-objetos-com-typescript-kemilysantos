import { Disciplina } from "./disciplina"

export class Curso {
    private nome: string
    private disciplinas: Disciplina[]

    constructor(nome: string ){
        this.nome = nome;
        this.disciplinas = [];

    }

    public getNome(): string{
        return this.nome
    }
    public setNome(nome: string): void{
        this.nome = nome
    }
    public getDisciplina(){
        return this.disciplinas
    }
    public addDisciplina(disciplina: Disciplina): void{
        this.disciplinas.push(disciplina)
    }

}