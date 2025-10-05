const links = document.querySelectorAll('.btn');
const defaultBg = 'url("https://github.com/MrSpaghettiOk/UK-website-school-project/raw/main/stars_space_darkness_night_black_sky_background_hd_space.jpg")';

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = link.dataset.bg;
  });
  link.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = defaultBg;
  });
});