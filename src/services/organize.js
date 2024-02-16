export const getCurrentState = async () => {
  return localStorage.tasks ? JSON.parse(localStorage.tasks) : { notes: [] };
};
export const saveCurrentState = async (data) => {
  return (localStorage.tasks = JSON.stringify(data));
};
