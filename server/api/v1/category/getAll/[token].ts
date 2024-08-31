export default defineEventHandler(async (event) => {
  const token = event.context.params?.token;
  console.log(event.context);
  if (!token) {
    throw new Error("No query parameter provided");
  }
  const url = `http://localhost:8081/api/category/getAll`;
  try {
    const response = await $fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("🚀 ~ defineEventHandler ~ response:", response);
    return response;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
});
