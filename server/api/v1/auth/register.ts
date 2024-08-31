export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const url = `http://localhost:8081/auth/register`;

  try {
    const response = await $fetch(url, {
      method: "post",
      body: body,
    });
    return response;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
});
