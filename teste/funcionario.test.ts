import { Funcionario } from "../src/heranca/funcionario"
import { PF } from "../src/heranca/pf"
import { PJ } from "../src/heranca/pj"

describe('funcionario', () => {
    const NOME_FUNCIONARIO = 'Carlos'
    const NOME_FUNCIONARIO1 = 'Michel'
    const NOME_FUNCIONARIO2 = 'Edivan'
    const SALA_FUNCIONARIO = 1500
    const CNPJ_FUNCIONARIO = '6587864944548'
    const CPF_FUNCIONARIO = '6468651487818'

    it('funcionario', () => {
        const funcionario = new Funcionario('Carlos', 1500)
        expect(funcionario.getNome()).toBe(NOME_FUNCIONARIO)
        
    })
    it('adicionar pf com um salario de 1350', () => {
        const funcionario1 = new PF(NOME_FUNCIONARIO1, SALA_FUNCIONARIO, CPF_FUNCIONARIO)
        expect(funcionario1.getNome()) .toBe(NOME_FUNCIONARIO1)
        expect(funcionario1.getBeneficios() .length) .toBe(3)
        expect(funcionario1.getSalarioLiquido()) .toBe(1350)
    })
    
    it('pj com o salario de 1425', () => {
        const funcionario2 = new PJ(NOME_FUNCIONARIO2, SALA_FUNCIONARIO, CNPJ_FUNCIONARIO)
        expect(funcionario2.getNome()).toBe(NOME_FUNCIONARIO2)
        expect(funcionario2.getBeneficios() .length) .toBe(1)
        expect(funcionario2.getSalarioLiquido()) .toBe(1425)
    })
})