import { expect, test } from "@playwright/test";

test("Wave", async ({ request }) => {
  const health = await request.get("/api/wave");
  await expect(health).toBeOK();
});
