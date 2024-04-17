if (typeof window !== 'undefined') {
  // change header color after scrolling
  let scrollpos = window.scrollY
  const header = document.querySelector('header')
  //const header_height = header?.offsetHeight || 0
  const desiredTriggerPoint = 0 //header_height / 2

  const add_class_on_scroll = () => header?.classList.add('scrolled')
  const remove_class_on_scroll = () => header?.classList.remove('scrolled')

  const setClass = () => {
    scrollpos > desiredTriggerPoint
      ? add_class_on_scroll()
      : remove_class_on_scroll()
  }

  setClass()

  window?.addEventListener('scroll', function () {
    scrollpos = window.scrollY

    setClass()
  })

  // hover effect on navigation links

  const menu = document.querySelector('.menu__list')
  menu?.addEventListener('mouseover', (event) => {
    if (event.target?.classList.contains('menu__link')) {
      menu.style.setProperty(
        '--underline-width',
        `${event.target.offsetWidth}px`,
      )
      menu.style.setProperty(
        '--underline-offset-x',
        `${event.target.offsetLeft}px`,
      )
    }
  })
  menu?.addEventListener('mouseleave', () =>
    menu.style.setProperty('--underline-width', '0'),
  )

  // parallax scroll

  // function scrollParallax() {
  //   let images = document.getElementsByClassName("parallax");
  //   const offset = window.scrollY/3;
  //   for (let i = 0; i < images.length; i++) {
  //     images[i].style.transform = `translateY(${-offset}px)`;
  //   }
  // }

  // page scroll indicator

  // function runScrollIndicator() {
  //   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //   var scrolled = (winScroll / height) * 100;
  //   const scrollIndicator = document.querySelector(".scroll-indicator");
  //   if(scrollIndicator) {
  //     scrollIndicator.style.width = scrolled + "%";
  //   }
  // }

  window.onscroll = function () {
    // scrollParallax();
    // runScrollIndicator();
  };
}

// ease div when in view

function callback(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
    else {
      entry.target.classList.remove('visible');
    }
  });
}
function initObserver() {
  var observer = new IntersectionObserver(callback);
  var items = document.querySelectorAll('.ease-in-view');
  for(var i in items) {
    if(!items.hasOwnProperty(i)) {
      continue;
    }
    observer.observe(items[i]);
  }
}

if (window.IntersectionObserver) {
  initObserver();
} else {
  console.log("IntersectionObserver not supported.");
}

// dark mode switcher

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement?.classList.add('dark');
} else {
  document.documentElement?.classList.remove('dark');
}

const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon?.classList.remove('hidden');
} else {
    themeToggleDarkIcon?.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn?.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon?.classList.toggle('hidden');
    themeToggleLightIcon?.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement?.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement?.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement?.classList.contains('dark')) {
            document.documentElement?.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement?.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

// animated cursor
// const cursor = document.getElementById("cursor");
// const cursorBallBig = document.querySelector(".circle-big");
// const cursorBallSmall = document.querySelector(".circle-small");

// let posS = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// let posB = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// let mouse = { x: posS.x, y: posS.y };
// const speed = 0.1;
// let fpms = 60 / 1000;

// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

// const xSetBallSmall = gsap.quickSetter(cursorBallSmall, "x", "px");
// const ySetBallSmall = gsap.quickSetter(cursorBallSmall, "y", "px");
// const xSetBallBig = gsap.quickSetter(cursorBallBig, "x", "px");
// const ySetBallBig = gsap.quickSetter(cursorBallBig, "y", "px");

// gsap.ticker.add((time, deltaTime) => {
//   let delta = deltaTime * fpms;
//   let dt = 1.0 - Math.pow(1.0 - speed, delta);

//   posS.x += mouse.x - posS.x;
//   posS.y += mouse.y - posS.y;
//   posB.x += (mouse.x - posB.x) * dt;
//   posB.y += (mouse.y - posB.y) * dt;
//   xSetBallSmall(posS.x);
//   ySetBallSmall(posS.y);
//   xSetBallBig(posB.x);
//   ySetBallBig(posB.y);
// });
