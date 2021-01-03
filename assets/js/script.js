const getCurrentYear = () => {
  return new Date().getFullYear();
};
document.getElementById('current_year').innerHTML = getCurrentYear();
