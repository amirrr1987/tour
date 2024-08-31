export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const url = `http://localhost:8081/tour/find/${id}`;
  try {
    return await $fetch(url);
  } catch (err) {
    return err;
  }
});
