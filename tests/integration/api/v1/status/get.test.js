test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

/*

- A função **`fetch`** envia um request HTTP do tipo GET para a URL
- O fetch é uma operação assíncrona, usa-se 'await' para "pausar" a execução do teste.
- O **`await`** garante que o teste espere até que a promessa de valor (a resposa da requisição)
seja resolvida. A resposta é então salva na variável `response`.
- O **`async`** permite o uso do **`await`**.
*/
