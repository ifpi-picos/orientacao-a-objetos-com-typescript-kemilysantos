import { PJ } from "../src/heranca/pj"

describe('pj', () => {
    it('adicionar pj', () => {
        const pj = new PJ('Edivan', 2000, '6546879876546')
        expect(pj.getNome()).toBe('Edivan')
        expect(pj.getBeneficios().length).toBe(1)
        expect(pj.getSalarioLiquido()).toBe(1900)
    })
})