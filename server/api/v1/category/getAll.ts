export default defineEventHandler(async () => {
  const url = `http://10.0.202.34:8081/category/getAll`;
  try {
    const response = await $fetch(url, {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    });
    console.log(response);
    return response;
  } catch (error: unknown) {
    // Use 'unknown' instead of 'any'
    if (error instanceof Error) {
      // Narrow down to the 'Error' type
      console.error("Fetch error:", error.message);
      return { error: error.message };
    } else {
      console.error("Unknown error:", error);
      return { error: "An unknown error occurred" };
    }
  }
});
