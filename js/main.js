"user srtict";

let openmenu = document.querySelector(".menu__icon");
let modal = document.querySelector(".burger__mobail");
let closemenu = document.querySelector(".burger__close");
let closemenu2 = document.querySelector(".burger__list");
const screen1200 = window.matchMedia("(min-width: 1200px)");

openmenu.onclick = function (e) {
  e.preventDefault;
  modal.classList.add("modal__active");
};
closemenu.onclick = function (b) {
  b.preventDefault;
  modal.classList.remove("modal__active");
};
closemenu2.onclick = function (b2) {
  b2.preventDefault;
  modal.classList.remove("modal__active");
};

let slideIndex = 0;
let btnnext = document.querySelector(".btn_right");
let btnprevue = document.querySelector(".btn_left");
var slides = document.getElementsByClassName("slider");
let sum = slides.length - 1;

btnnext.onclick = function plusSlide(e) {
  e.preventDefault;

  slides[slideIndex].classList.remove("slider_active");
  slides[slideIndex].classList.add("slider_hidden");
  slideIndex++;
  if (slideIndex > sum) {
    slideIndex = 0;
    slides[slideIndex].classList.add("slider_active");
  } else {
    slides[slideIndex].classList.add("slider_active");
  }
};

btnprevue.onclick = function minusSlide() {
  slides[slideIndex].classList.remove("slider_active");
  slides[slideIndex].classList.add("slider_hidden");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sum;
    slides[slideIndex].classList.remove("slider_hidden");
    slides[slideIndex].classList.add("slider_active");
  } else {
    slides[slideIndex].classList.remove("slider_hidden");
    slides[slideIndex].classList.add("slider_active");
  }
};

let portfBox = document.querySelector(".portfolio_horizont");
let portfSlider = document.querySelectorAll(".potrfolio__img");
let modalImg = document.querySelectorAll(".modal__img");
let modalWindow = document.querySelector(".modal__portfolio");
let closePotrfSlider = document.querySelector(".close__portfolio");
let btnright = document.querySelector(".right");
let btnleft = document.querySelector(".left");

portfBox.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("portfolio_horizont1") ||
    e.target.classList.contains("portfolio_img")
  ) {
    if (screen1200.matches) {
      let index = e.target.dataset.num;
      modalWindow.classList.add("portSlider__active");
      modalImg.forEach(
        (item) => (item.style.transform = `translateX(${-index * 100}%)`)
      );
      closePotrfSlider.onclick = function close() {
        modalWindow.classList.remove("portSlider__active");
      };
      btnleft.addEventListener("click", function plusSlidePortf(e) {
        e.preventDefault;
        index++;
        if (index === portfSlider.length) {
          index = 0;
        }
        modalImg.forEach(
          (item) => (item.style.transform = `translateX(${-index * 100}%)`)
        );
      });
      btnright.addEventListener("click", function plusSlidePortf(e) {
        e.preventDefault;
        index--;
        if (index < 0) {
          index = portfSlider.length - 1;
        }
        modalImg.forEach(
          (item) => (item.style.transform = `translateX(${-index * 100}%)`)
        );
      });
    } else {
      modalWindow.classList.add("portSlider__active");
      closePotrfSlider.onclick = function close() {
        modalWindow.classList.remove("portSlider__active");
      };
    }
  }
});
const openFaq = document.querySelector(".faq");
openFaq.addEventListener("click", function (e) {
  if (e.target.classList.contains("faq__click")) {
    let index = e.target.dataset.point;
    let faqActive = document.querySelectorAll(".faq__box");
    faqActive[index].classList.toggle("faq_active");
  }
});

let popup1_button = document.querySelectorAll(".popup__active1");
let popup1 = document.querySelector(".popup1");
let popup2_button = document.querySelectorAll(".popup__active2");
let popup2 = document.querySelector(".popup__window2");
let popup3 = document.querySelector(".popup__window3");
let popup4 = document.querySelector(".popup__window4");
let popup3_button = document.querySelector(".button_about1");
let popup4_button = document.querySelector(".button_about2");

for (let item1 of popup1_button) {
  item1.addEventListener("click", function () {
    popup1.classList.add("popup_active");
    popup3.classList.remove("popup_active");
    popup4.classList.remove("popup_active");
    let popup__close1 = document.querySelector(".close__popup1");
    popup__close1.onclick = function () {
      popup1.classList.remove("popup_active");
    };
  });
}
for (let item2 of popup2_button) {
  item2.addEventListener("click", function () {
    popup2.classList.add("popup_active");
    let popup__close2 = document.querySelector(".close__popup2");
    popup__close2.onclick = function () {
      popup2.classList.remove("popup_active");
    };
  });
}
popup3_button.addEventListener("click", function () {
  popup3.classList.add("popup_active");
  let popup__close3 = document.querySelector(".close__popup3");
  popup__close3.onclick = function () {
    popup3.classList.remove("popup_active");
  };
});
popup4_button.addEventListener("click", function () {
  popup4.classList.add("popup_active");
  let popup__close4 = document.querySelector(".close__popup4");
  popup__close4.onclick = function () {
    popup4.classList.remove("popup_active");
  };
});

let menuMessendger = document.querySelector(".messengers__main");
let menuMessendgerClose = document.querySelector(".messengers__close");
let telegamLink = document.querySelector(".messengers__telegram");
let whatsappLink = document.querySelector(".messengers__whatsapp");
let viberLink = document.querySelector(".messengers__viber");
let skypeLink = document.querySelector(".messengers__skype");
let mailLink = document.querySelector(".messengers__mail");
let phoneLink = document.querySelector(".messengers__phone");

menuMessendger.addEventListener("click", function (mes) {
  mes.preventDefault();
  menuMessendger.classList.add("messengers__main_noactive");
  telegamLink.classList.add("telegram_active");
  whatsappLink.classList.add("whatsapp_active");
  viberLink.classList.add("viber_active");
  skypeLink.classList.add("skype_active");
  mailLink.classList.add("mail_active");
  phoneLink.classList.add("phone_active");

  menuMessendgerClose.onclick = function (mes1) {
    mes1.preventDefault();
    menuMessendger.classList.remove("messengers__main_noactive");
    telegamLink.classList.remove("telegram_active");
    whatsappLink.classList.remove("whatsapp_active");
    viberLink.classList.remove("viber_active");
    skypeLink.classList.remove("skype_active");
    mailLink.classList.remove("mail_active");
    phoneLink.classList.remove("phone_active");
  };
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
let tohigh = document.querySelector(".to__high");
let header = document.querySelector(".header");
let messengerBox = document.querySelector(".messendger");
messengerBox.style.display = "none";

const apperanceMessege = function (entrise) {
  const entry = entrise[0];

  if (!entry.isIntersecting) {
    tohigh.classList.add("to__high_active");
    messengerBox.style.display = "block";
  } else {
    tohigh.classList.remove("to__high_active");
    messengerBox.style.display = "none";
  }
};

const observeOptions = {
  root: null,
  threshold: 0,
  rootMargin: "400px",
};
const messageObserver = new IntersectionObserver(
  apperanceMessege,
  observeOptions
);
messageObserver.observe(header);

let closeError1 = document.querySelector(".close__error1");
let errorBox1 = document.querySelector(".forma__error1");
let closeError2 = document.querySelector(".close__error2");
let errorBox2 = document.querySelector(".forma__error2");
let closeError3 = document.querySelector(".close__error3");
let errorBox3 = document.querySelector(".forma__error3");
let closeError4 = document.querySelector(".close__error4");
let errorBox4 = document.querySelector(".forma__error4");

//----------------------
let forma1 = document.getElementById("forma1");
let formabutton1 = document.querySelector(".submit1");
formabutton1.onclick = function formSend(ev) {
  let error = formValidate(forma1);
  if (error === 0) {
  } else {
    ev.preventDefault();
  }
};

function formValidate(forma1) {
  let error = 0;
  const formReq1 = document.querySelectorAll("._req1");
  for (let index = 0; index < formReq1.length; index++) {
    const input1 = formReq1[index];
    formremoveError(input1);
    if (input1.classList.contains("_phone")) {
      if (phoneTest(input1)) {
        formaddError(input1);
        error++;
      }
    } else if (
      input1.getAttribute("type") == "checkbox" &&
      input1.checked == false
    ) {
      formaddError(input1);
      error++;
    } else {
      if (input1.value === "") {
        formaddError(input1);
        error++;
      }
    }
  }
  return error;
}
function formaddError(input1) {
  input1.parentElement.classList.add("_error");
  input1.classList.add("_error");
  errorBox1.classList.add("boxactive");
  closeError1.onclick = function () {
    errorBox1.classList.remove("boxactive");
  };
  setTimeout(removeError1, 5000);
}
function formremoveError(input1) {
  input1.parentElement.classList.remove("_error");
  input1.classList.remove("_error");
}
function phoneTest(input1) {
  return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input1.value);
}
function removeError1() {
  errorBox1.classList.remove("boxactive");
}
//-----------------------------------------------
let forma2 = document.getElementById("forma2");
let formabutton2 = document.querySelector(".submit2");
formabutton2.onclick = function formSend(ev2) {
  let error = formValidate2(forma2);
  if (error === 0) {
  } else {
    ev2.preventDefault();
  }
};
function formValidate2(forma2) {
  let error = 0;
  const formReq2 = document.querySelectorAll("._req2");
  for (let index = 0; index < formReq2.length; index++) {
    const input = formReq2[index];
    formremoveError2(input);
    if (input.classList.contains("_phone")) {
      if (phoneTest2(input)) {
        formaddError2(input);
        error++;
      }
    } else if (
      input.getAttribute("type") == "checkbox" &&
      input.checked == false
    ) {
      formaddError2(input);
      error++;
    } else {
      if (input.value === "") {
        formaddError2(input);
        error++;
      }
    }
  }
  return error;
}
function formaddError2(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
  errorBox2.classList.add("boxactive");
  closeError2.onclick = function () {
    errorBox2.classList.remove("boxactive");
  };
  setTimeout(removeError2, 5000);
}
function formremoveError2(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}
function phoneTest2(input) {
  return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
}
function removeError2() {
  errorBox2.classList.remove("boxactive");
}
//---------------------------------------
let forma3 = document.getElementById("forma3");
let formabutton3 = document.querySelector(".submit3");
formabutton3.onclick = function formSend(ev3) {
  let error = formValidate3(forma3);
  if (error === 0) {
  } else {
    ev3.preventDefault();
  }
};
function formValidate3(forma3) {
  let error = 0;
  const formReq3 = document.querySelectorAll("._req3");
  for (let index = 0; index < formReq3.length; index++) {
    const input = formReq3[index];
    formremoveError3(input);
    if (input.classList.contains("_phone")) {
      if (phoneTest3(input)) {
        formaddError3(input);
        error++;
      }
    } else if (
      input.getAttribute("type") == "checkbox" &&
      input.checked == false
    ) {
      formaddError3(input);
      error++;
    } else {
      if (input.value === "") {
        formaddError3(input);
        error++;
      }
    }
  }
  return error;
}
function formaddError3(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
  errorBox3.classList.add("boxactive");
  closeError3.onclick = function () {
    errorBox3.classList.remove("boxactive");
  };
  setTimeout(removeError3, 5000);
}
function formremoveError3(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}
function phoneTest3(input) {
  return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
}
function removeError3() {
  errorBox3.classList.remove("boxactive");
}
//---------------------------------------
let forma4 = document.getElementById("forma4");
let formabutton4 = document.querySelector(".submit4");
formabutton4.onclick = function formSend(ev4) {
  let error = formValidate4(forma4);
  if (error === 0) {
  } else {
    ev4.preventDefault();
  }
};
function formValidate4(forma4) {
  let error = 0;
  const formReq4 = document.querySelectorAll("._req4");
  for (let index = 0; index < formReq4.length; index++) {
    const input = formReq4[index];
    formremoveError4(input);
    if (input.classList.contains("_phone")) {
      if (phoneTest4(input)) {
        formaddError4(input);
        error++;
      }
    } else if (
      input.getAttribute("type") == "checkbox" &&
      input.checked == false
    ) {
      formaddError4(input);
      error++;
    } else {
      if (input.value === "") {
        formaddError4(input);
        error++;
      }
    }
  }
  return error;
}
function formaddError4(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
  errorBox4.classList.add("boxactive");
  closeError4.onclick = function () {
    errorBox4.classList.remove("boxactive");
  };
}
function formremoveError4(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}
function phoneTest4(input) {
  return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
}
function removeError4() {
  errorBox4.classList.remove("boxactive");
}
