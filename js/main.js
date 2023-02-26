const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

let swiper = new Swiper('.swiper-container',{
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function showForm(activity) {
    let form = `
        <form class="price_form">
            <h2 class="price_form-title">${activity} árajánlat kérés</h2>
            <label for="name">Név:</label>
            <input type="text" id="name" name="name"><br>
          
            <label for="phone">Telefonszám:</label>
            <input type="tel" id="phone" name="phone"><br>
          
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>
          
            <label for="type">Milyen típusú oldal legyen?</label>
            <select id="type" name="type">
              <option value="">- Válassz egy típust -</option>
              <option value="bemutato">Bemutatkozó oldal</option>
              <option value="webshop">Webshop</option>
              <option value="uzleti">Üzleti oldal</option>
              <option value="portfolio">Portfólió oldal</option>
              <option value="blog">Blog</option>
              <option value="egyeb">Egyéb</option>
              <option value="javaslat">Javaslatot kérek</option>
            </select><br>
          
            <label for="menu">Hány menü pont legyen?</label>
            <select id="menu" name="menu">
              <option value="">- Válassz egy lehetőséget -</option>
              <option value="1">1 db</option>
              <option value="2">2 db</option>
              <option value="3">3 db</option>
              <option value="4">4 db</option>
              <option value="5">5 db</option>
              <option value="egyeb">Egyéb</option>
              <option value="javaslat">Javaslatot kérek</option>
            </select><br>
          
            <label for="subpages">Hány aloldal legyen?</label>
            <select id="subpages" name="subpages">
              <option value="">- Válassz egy lehetőséget -</option>
              <option value="1">1 db</option>
              <option value="2">2 db</option>
              <option value="3">3 db</option>
              <option value="4">4 db</option>
              <option value="5">5 db</option>
              <option value="tobb">Több</option>
              <option value="javaslat">Javaslatot kérek</option>
            </select><br>
          
            <label for="seo">SEO szükséges?</label>
            <select id="seo" name="seo">
              <option value="">- Válassz egy opciót -</option>
              <option value="igen">Igen</option>
              <option value="nem">Nem</option>
              <option value="javaslat">Javaslatot kérek</option>
            </select><br>
          
            <label for="maintenance">Szükséges a későbbiekben weboldal karbantartás?</label>
            <select id="maintenance" name="maintenance">
              <option value="">- Válassz egy opciót -</option>
              <option value="igen">Igen</option>
              <option value="nem">Nem</option>
              <option value="javaslat">Javaslatot kérek</option>
            </select><br>

            <label for="message">Üzenet:</label>
              
            <textarea id="message" name="message" rows="5" cols="75"></textarea><br>
                
            <input type="submit" class="button button-flex price_button" value="Küldés">
        </form>
    `;
    document.getElementById('form-container').innerHTML = form;
}

function showForn(activity) {
    let form = `
        <form class="price_form">
            <h2 class="price_form-title">${activity} árajánlat kérés</h2>

        </form>
    `;
    document.getElementById('form-container').innerHTML = form;
}

function showFort(activity) {
    let form = `
        <form class="price_form">
            <h2 class="price_form-title">${activity} árajánlat kérés</h2>

        </form>
    `;
    document.getElementById('form-container').innerHTML = form;
}