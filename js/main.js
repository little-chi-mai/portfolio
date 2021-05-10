var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
var myHeaders = new Headers();
myHeaders.append('permissions-policy', 'interest-cohort=()');

const copyToClipboard = function() {
  console.log('Laa');
  
  let txt = document.createTextNode('chimai.dk@gmail.com');
  var m = document;
  var w = window;
  var b = m.body;
  b.appendChild(txt);
  if (b.createTextRange) {
    var d = b.createTextRange();
    d.moveToElementText(txt);
    d.select();
    m.execCommand('copy');
  } 
  else {
    var d = m.createRange();
    var g = w.getSelection;
    d.selectNodeContents(txt);
    g().removeAllRanges();
    g().addRange(d);
    m.execCommand('copy');
    g().removeAllRanges();
  }
  txt.remove();
  window.alert("Copied email to your clipboard!");
}