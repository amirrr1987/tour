export default defineEventHandler(async (event) => {
  const token = event.context.params?.token;
  console.log(event.context)
  if (!token) {
    throw new Error("No query parameter provided");
  }
  const url = `http://10.0.202.34:8081/api/category/getAll`;
  try {
    const response = await $fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
});
