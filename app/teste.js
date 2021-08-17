"use strict";
exports.__esModule = true;
var curso_1 = require("../src/Agregacao/curso");
var disciplina_1 = require("../src/Agregacao/disciplina");
var professor_1 = require("../src/Agregacao/professor");
var empresa_1 = require("../src/heranca/empresa");
var funcionario_1 = require("../src/heranca/funcionario");
var pf_1 = require("../src/heranca/pf");
var pj_1 = require("../src/heranca/pj");
var professor = new professor_1.Professor('Nayara');
var disciplina = new disciplina_1.Disciplina('Banco de dados');
var curso = new curso_1.Curso('Ads');
console.log('Curso: ', curso.getNome());
console.log('Disciplina: ', disciplina.getNome());
console.log('Professor: ', professor.getNome());
console.log('///////////////////////////////////////////////////');
var empresa = new empresa_1.Empresa('Mambee');
var funcionario = new funcionario_1.Funcionario('Carlos', 2000);
var funcionario1 = new pf_1.PF('Michel', 2000, '23288946587');
var funcionario2 = new pj_1.PJ('Edivan', 2000, '6546879876546');
console.log('Empresa: ', empresa.getNome());
console.log('Funcionario: ', funcionario.getNome(), funcionario.getSalario());
console.log('PF: ', funcionario1.getNome(), funcionario1.getCpf(), funcionario1.getSalarioLiquido(), funcionario1.getBeneficios());
console.log('PJ: ', funcionario2.getNome(), funcionario2.getCnpj(), funcionario2.getSalarioLiquido(), funcionario2.getBeneficios());
