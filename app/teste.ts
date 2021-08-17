import { Curso } from "../src/Agregacao/curso";
import { Disciplina } from "../src/Agregacao/disciplina";
import { Professor } from "../src/Agregacao/professor";
import { Empresa } from "../src/heranca/empresa";
import { Funcionario } from "../src/heranca/funcionario";
import { PF } from "../src/heranca/pf";
import { PJ } from "../src/heranca/pj";

const professor = new Professor('Nayara');
const disciplina = new Disciplina('Banco de dados');
const curso = new Curso('Ads')



console.log('Curso: ', curso.getNome())
console.log('Disciplina: ', disciplina.getNome())
console.log('Professor: ', professor.getNome())

console.log('///////////////////////////////////////////////////')

const empresa = new Empresa('Mambee');
const funcionario = new Funcionario('Carlos', 2000 );
const funcionario1 = new PF('Michel', 2000, '23288946587');
const funcionario2 = new PJ('Edivan', 2000, '6546879876546')


console.log('Empresa: ', empresa.getNome())
console.log('Funcionario: ', funcionario.getNome(), funcionario.getSalario())
console.log('PF: ', funcionario1.getNome(), funcionario1.getCpf(), funcionario1.getSalarioLiquido(), funcionario1.getBeneficios())
console.log('PJ: ', funcionario2.getNome(), funcionario2.getCnpj(), funcionario2.getSalarioLiquido(), funcionario2.getBeneficios())