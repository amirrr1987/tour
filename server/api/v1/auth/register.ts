export default defineEventHandler(async () => {
  const url = `http://10.0.202.34:8080/api/auth/register`;

  try {
    const response = await $fetch(url);
    return response;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
});
