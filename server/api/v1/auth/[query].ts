export default defineEventHandler(async (event) => {
  const query = event.context.params?.query;

  if (!query) {
    throw new Error("No query parameter provided");
  }

  const url = `http://10.0.202.34:8080/api/auth/verify-email?token=${query}`;

  console.log(`Fetching URL: ${url}`);

  try {
    const response = await $fetch(url);
    return response;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
});
