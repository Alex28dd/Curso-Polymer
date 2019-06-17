const searchInput = document.getElementById('search__input');
const searchBtn = document.getElementById('search__btn');
const locky = document.getElementById('lucky__btn');

searchBtn.addEventListener('click', () => {
  const input = searchInput.value;
  const busqueda = `https://www.google.com.mx/search?q=${input}`
  redirect(busqueda);
});

const redirect = (busqueda) => {
  window.location.assign(busqueda);
}
