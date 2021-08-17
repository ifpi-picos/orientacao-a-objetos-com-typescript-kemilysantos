import { Empresa } from "../src/heranca/empresa"
import { Funcionario } from "../src/heranca/funcionario"


describe('empresa', () => {
    const NOME_EMPRESA = 'MAMBEE'
    const NOME_FUNCIONARIO = 'Carlos'
    const SALARIO_FUNCIONARIO = 2000
   

    it('criar empresa', () => {
        const empresa = new Empresa(NOME_EMPRESA)
        expect(empresa.getNome()) .toBe(NOME_EMPRESA)
    })

    it('adicionar funcionarios a empresa', () => {
        const funcionario = new Funcionario(NOME_FUNCIONARIO, SALARIO_FUNCIONARIO)
        expect(funcionario.getNome()).toBe(NOME_FUNCIONARIO)
        expect(funcionario.getSalario()) .toBe(SALARIO_FUNCIONARIO)
        
        
    })
})