export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getUTCFullYear();

  return `Joined ${day} ${month}  ${year}`;
};
