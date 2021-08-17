
// where to store the variables if the image appears
let imageAppear = {};

const addClass = function(num, animationClass, className) {
  // console.log("EL", el);
  let el = document.getElementsByClassName(className)[0];
  let elPos = el.getBoundingClientRect().y;
  // console.log("EL POS", elPos);

  if (elPos < num && !imageAppear[className]) {
    imageAppear[className] = true;
    el.classList.add(animationClass);
  }
}

const addClassMultiple = function(num, animationClass, classMain) {
  // console.log("EL", el);
  let el = document.getElementsByClassName(classMain)[0];
  let elPos = el.getBoundingClientRect().y;
  // console.log("EL POS ARROW", elPos);
  // console.log("classes");

  if (elPos < num && !imageAppear[classMain]) {
    imageAppear[classMain] = true;
    el.classList.add(animationClass);
    // classes.map(className => {
    //   console.log("className", className);
      let bulkEl = document.getElementsByClassName("bulk")[0];
      let ballEl = document.getElementsByClassName("ball")[0];
      let cakeEl = document.getElementsByClassName("cake")[0];
      imageAppear["bulk"] = true;
      imageAppear["ball"] = true;
      imageAppear["cake"] = true;
      bulkEl.classList.add("animation-bottom-wait-1");
      ballEl.classList.add("animation-bounce");
      cakeEl.classList.add("animation-ziggle");
    // })
  }
}

$(document).ready(function() {
  // store position of scroll
  let scrollHistory = [1, 2, 3, 4, 5, 6];

  $(window).scroll(function() {
    
    addClass(700, "animation-bottom", "baymax");
    addClassMultiple(700, "animation-angle-wait", "arrow");
    addClassMultiple(700, "animation-bottom-wait-3", "projects__cards-title-0");
    addClassMultiple(700, "animation-bottom-wait-3", "projects__cards-title-2");
    addClassMultiple(700, "animation-bottom-wait-3", "projects__cards-title-1");
    addClassMultiple(700, "animation-bottom-wait-3", "projects__cards-title-3");
    addClassMultiple(700, "animation-bottom-wait-3", "projects__cards-title-4");
    addClassMultiple(700, "animation-bottom-wait-3", "projects__cards-title-5");
    addClassMultiple(700, "animation-bottom-wait-3", "projects__cards-title-6");
    
    let currentPos = $(window).scrollTop();

    // update scrollHistory
    scrollHistory.shift();
    scrollHistory.push(currentPos);

    // keep track of scroll if users scroll down or up
    let scrollDownPx = scrollHistory[5] - scrollHistory[0];

    if (scrollDownPx >= 7) {
      $("#navbar").css("top", "-200px");
    } else if (scrollDownPx <= -7) {
      $("#navbar").css("top", "0");
    }

    if (currentPos === 0) {
      $("#navbar").css("top", "0");
    }
  });
  let myHeaders = new Headers();
  myHeaders.append('permissions-policy', 'interest-cohort=()');
  
})

// Copy to clipboard
const copyToClipboard = function() {
  let txt = document.createTextNode('chimai.dk@gmail.com');
  let m = document;
  let w = window;
  let b = m.body;
  b.appendChild(txt);
  if (b.createTextRange) {
    let d = b.createTextRange();
    d.moveToElementText(txt);
    d.select();
    m.execCommand('copy');
  } 
  else {
    let d = m.createRange();
    let g = w.getSelection;
    d.selectNodeContents(txt);
    g().removeAllRanges();
    g().addRange(d);
    m.execCommand('copy');
    g().removeAllRanges();
  }
  txt.remove();
  // window.alert("Copied email to your clipboard!");

  let notiEl = document.getElementsByClassName("noti-box")[0];
  notiEl.classList.add("visible");

  setTimeout(() => {
    notiEl.classList.remove("visible");
  }, 2000)
}
