import { Professor } from "../src/Agregacao/professor"

describe('professor', () => {
    it('adicionar professor com o nome Nayara', () => {
        const NOME_PROFESSOR = "Nayara"
        const professor = new Professor(NOME_PROFESSOR)
        expect(professor.getNome()).toBe(NOME_PROFESSOR)
    })
})