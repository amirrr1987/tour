export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const url = `http://10.0.202.34:8081/auth/register`;

  try {
    const response = await $fetch(url, {
      method: "post",
      body: body,
    });
    console.log(response);
    return response;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
});
