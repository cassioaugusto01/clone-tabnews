test("GET TO /api/v1/status SHOULD RETURN 200 OK", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status")
  expect(response.status).toBe(200);
});