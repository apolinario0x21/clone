/*
- A função **`fetch`** envia um request HTTP do tipo GET para a URL
- O fetch é uma operação assíncrona, usa-se 'await' para "pausar" a execução do teste.
- O **`await`** garante que o teste espere até que a promessa de valor (a resposa da requisição)
seja resolvida. A resposta é então salva na variável `response`.
- O **`async`** permite o uso do **`await`**.
*/

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody)
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt)

  expect(responseBody.dependencies.database.version).toEqual("16.10")
  expect(responseBody.dependencies.database.max_connections).toEqual(100)
  expect(responseBody.dependencies.database.opened_connections).toEqual(1)
});




