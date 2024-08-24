import type { Category } from "~/types/CategoryModel";

export default defineEventHandler(async () => {
  const url = `http://10.0.202.34:8081/category/getAll`;

  try {
    const response: Category[] = await $fetch(url, {
      method: "GET",
    });
console.log(response);

    return response;
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
