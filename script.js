menu.onclick = function menuFunction() {
  const el = document.getElementById('myTopnav');

  el.className === 'topnav'
    ? (el.className += ' responsive')
    : (el.className = 'topnav');
};
