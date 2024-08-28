export default defineEventHandler(async (event) => {
  const query = event.context.params?.query;

  if (!query) {
    throw new Error("No query parameter provided");
  }

  const url = `http://10.0.202.34:8081/auth/verify-email?token=${query}`;

  try {
    return await $fetch(url);
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: error };
  }
});
