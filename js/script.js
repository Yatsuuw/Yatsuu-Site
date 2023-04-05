// MAJ auto de l'année //
document.write(new Date().getFullYear());

// Importation des éléments à modifier //
const toggleSwitch = document.querySelector('#darkModeToggle');
const body = document.querySelector('body');
const header = document.querySelector('header');
const mainSectionA = document.querySelector('main section .prespers');
const mainSectionB = document.querySelector('main section .prespro');
const nav = document.querySelector('nav');
const navA = document.querySelector('header nav');
const hspan = document.querySelector('header div span');
const footer = document.querySelector('footer');

// Vérifier si le thème sombre est activé avec localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
  toggleSwitch.checked = true;
  body.classList.add('dark-mode');
  mainSectionA.classList.add('dark-mode');
  mainSectionB.classList.add('dark-mode');
  header.classList.add('dark-mode');
  nav.classList.add('dark-mode');
  navA.classList.add('dark-mode');
  hspan.classList.add('dark-mode');
  footer.classList.add('dark-mode');
}

// Modification des éléments par le dark-mode en leur ajoutant/retirant une class //
toggleSwitch.addEventListener('change', function() {
    if(this.checked) {
        localStorage.setItem('theme', 'dark');
        body.classList.add('dark-mode');
        mainSectionA.classList.add('dark-mode');
        mainSectionB.classList.add('dark-mode');
        header.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        navA.classList.add('dark-mode');
        hspan.classList.add('dark-mode');
        footer.classList.add('dark-mode');
    } else {
        localStorage.removeItem('theme');
        body.classList.remove('dark-mode');
        mainSectionA.classList.remove('dark-mode');
        mainSectionB.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        nav.classList.remove('dark-mode');
        navA.classList.remove('dark-mode');
        hspan.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
    }
});
