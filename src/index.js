const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// header nav
const navItem = document.querySelectorAll('header nav a')
const navItemLinks = Object.values(siteContent.nav);
navItem.forEach((link, index) => {
  link.textContent = navItemLinks[index]
  link.classList.add('italic');
});

// const navAnchors = Array.from(document.querySelectorAll("nav a"));
// navAnchors.forEach((link,index) => {
//   link.classList.add('italic')
//   let navItems = Object.values(siteContent.nav);
//   link.innerText = navItems[index];
// } );

//header
const ctaH1 = document.querySelector('.cta h1');
ctaH1.textContent = siteContent.cta.h1
const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta.button

//top content
const topContent = document.querySelector('.top-content');
const topContentH4 = topContent.querySelectorAll('h4');
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];
const topContentP = topContent.querySelectorAll('.top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

//bottom content
const bottomContent = document.querySelector('.bottom-content');
const bottomContentH4 = bottomContent.querySelectorAll('h4');
bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];
const bottomContentP = bottomContent.querySelectorAll('p');
bottomContentP[0].textContent = siteContent['main-content']['services-content'];
bottomContentP[1].textContent = siteContent['main-content']['product-content'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

//contact 
const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address
contactP[1].textContent = siteContent.contact.phone
contactP[2].textContent = siteContent.contact.email

//footer
const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add('bold');

//img
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.images['cta-img']);

const accImg = document.querySelector('#middle-img');
accImg.src = siteContent.images['accent-img'];