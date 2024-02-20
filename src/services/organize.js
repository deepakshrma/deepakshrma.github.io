export const getCurrentState = async () => {
  return localStorage.tasks ? JSON.parse(localStorage.tasks) : { notes: [] };
};
export const saveCurrentState = async (data) => {
  return (localStorage.tasks = JSON.stringify(data));
};

export const getTopNews = () =>
  fetch("https://backend-api.deepak-v-aws.workers.dev/news").then((x) =>
    x.json(),
  );
