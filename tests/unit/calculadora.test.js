test("Primeiro Teste", callbackFunction);

function callbackFunction() {
  console.log("Teste realizado com sucesso!")
}

test("Segundo teste", function() {
  console.log("Teste realizado com sucesso!")
})

test("Terceiro teste", () => {
  console.log("Teste realizado com sucesso!")
})

test("Espero que 1 seja 1", () => {
  expect(1).toBe(1)
})

const texto = "Hello World"
test("Deve validar se é variável é do tipo String ", () => {
  expect(typeof texto).toBe("string")
})

const calc = require("../../models/calculadora");

test("Deve somar os números", () => {
  const result = calc.sum(2, 2);
  expect(result).toBe(4);
})

test("Deve retornar 'Error' ao somar 'musica' + 100 caracteres", () => {
  const result = calc.sum("musica", 100)
  expect(result).toBe("Error");
} )