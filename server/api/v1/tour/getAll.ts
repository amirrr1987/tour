export default defineEventHandler(async () => {
  const url = `http://10.0.202.34:8081/tour/getAll`;

  try {
    return await $fetch(url);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
      return { error: error.message };
    } else {
      console.error("Unknown error:", error);
      return { error: "An unknown error occurred" };
    }
  }
});
