export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const dateTimeFormat = (dateStr) => {
  const dateObj = new Date(dateStr);

  const date = dateObj.toLocaleDateString("en-IN");
  const time = dateObj.toLocaleTimeString("en-IN");

  return { date, time };
};
