// burger menu

$(document).ready(function() {
    $('.header__burger, .menu__link').click(function(event) {
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // select language

  const select = document.querySelector(".change-lang");
  const allLang = ["ua", "pl", "en"];

  select.addEventListener("change", changeURLLanguage);

  function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
  }

  function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ua";
        location.reload();
    }
    select.value = hash;

    for (let key in langArr) {
      document.querySelector(".lng-" + key).innerHTML = langArr[key][hash];
    }
  }

  changeLanguage();