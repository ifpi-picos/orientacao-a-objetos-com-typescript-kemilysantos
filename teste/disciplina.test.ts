import { Disciplina } from "../src/Agregacao/disciplina"

describe('disciplina', () => {
    it('disciplina com o nome banco de dados', () => {
        const NOME_DISCIPLINA = "BANCO DE DADOS"
        const disciplina = new Disciplina(NOME_DISCIPLINA)
        expect(disciplina.getNome()).toBe(NOME_DISCIPLINA)
    })
})