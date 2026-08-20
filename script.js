const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.case-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const card = toggle.closest('.case-study');
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.querySelector('span:first-child').textContent = isOpen ? 'Explore the work' : 'Close case study';
    card.classList.toggle('open', !isOpen);
  });
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
  { threshold: 0.1 },
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
