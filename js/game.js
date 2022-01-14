const kocka = document.getElementById("kocka");
const sutr = document.getElementById("sutr");
const score = document.getElementById("score");



function jump() {
  kocka.classList.add("jump-animation");
  setTimeout(() =>
    kocka.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!kocka.classList.contains('jump-animation')) {
    jump();
  }
})



setInterval(() => {
  const kockaTop = parseInt(window.getComputedStyle(kocka)
    .getPropertyValue('top'));
  const sutrLeft = parseInt(window.getComputedStyle(sutr)
    .getPropertyValue('left'));
  score.innerText++;

  if (sutrLeft < 0) {
    sutr.style.display = 'none';
  } else {
    sutr.style.display = ''
  }

  if (sutrLeft < 60 && sutrLeft > 0 && kockaTop > 150) {
    alert("Ziskal jsi skore: " + score.innerText +
      "\n\nHrat znovu?");
    location.reload();
  }
}, 50);

