export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const url = `http://10.0.202.34:8081/tour/find/${id}`;

  try {
    const response = await $fetch(url);
    return response;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: error };
  }
});
  