export default defineEventHandler(async (event) => {
  const body = getQuery(event);
  console.log("🚀 ~ defineEventHandler ~ body:", body);
  // const url = `http://localhost:8081/tour/getOne`;

  // try {
  //   return await $fetch(url);
  // } catch (error: unknown) {
  //   if (error instanceof Error) {
  //     console.error("Fetch error:", error.message);
  //     return { error: error.message };
  //   } else {
  //     console.error("Unknown error:", error);
  //     return { error: "An unknown error occurred" };
  //   }
  // }
});
