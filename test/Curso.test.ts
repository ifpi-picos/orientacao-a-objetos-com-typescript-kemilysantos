import { Curso } from "../src/Agregacao/curso"
import { Disciplina } from "../src/Agregacao/disciplina"
import { Professor } from "../src/Agregacao/professor"

describe(' teste curso', () => {
    const NOME_CURSO_ADS = "Ads"
    const NOME_DISCIPLINA = "Banco de dados"
    const NOME_PROFESSOR = "Nayara"
    
    it('criar um curso com o nome Ads', () => {
        const curso = new Curso(NOME_CURSO_ADS)
        expect(curso.getNome()).toBe(NOME_CURSO_ADS)
    })

    it('adicionar disciplina ao curso', () => {
        const disciplina = new Disciplina(NOME_DISCIPLINA)
        expect(disciplina.getNome()).toBe(NOME_DISCIPLINA)
    })

    it(' adicionar professor a disciplina', () => {
        const professor = new Professor(NOME_PROFESSOR)
        expect(professor.getNome()).toBe(NOME_PROFESSOR)
    })

})