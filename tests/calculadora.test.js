const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () =>{
  const resultado = calculadora.somar(2,2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () =>{
  const resultado = calculadora.somar(5,100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () =>{
  const resultado = calculadora.somar('banana',100);
  expect(resultado).toBe("Erro");
});