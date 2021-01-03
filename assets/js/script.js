const getCurrentYear = () => {
  return new Date().getFullYear();
};
const currentYearElement = document.getElementById('current_year');
if (currentYearElement) {
  currentYearElement.innerHTML = getCurrentYear();
}

const getGreets = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Morning';
  } else if (hour >= 12 && hour <= 16) {
    return 'Afternoon';
  } else if (hour > 16 && hour < 19) {
    return 'Evening';
  } else {
    return 'Night';
  }
};
const greetsElement = document.getElementById('greets');
if (greetsElement) {
  greetsElement.innerHTML = getGreets();
}
