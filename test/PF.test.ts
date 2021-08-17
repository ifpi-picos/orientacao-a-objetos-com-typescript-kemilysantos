import { PF } from "../src/heranca/pf"

describe('pf', () => {
    it('adicionar pf', () => {
        const pf = new PF('Michel', 2000, '23288946587')
        expect(pf.getNome()).toBe('Michel')
        expect(pf.getBeneficios().length).toBe(3)
        expect(pf.getSalarioLiquido()).toBe(1800)

    })
   

    
   
})