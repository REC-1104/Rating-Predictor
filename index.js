const card = document.querySelector('.card');
const wrap = document.querySelector('.wrapper');
const input = document.querySelector('.inp');
const cc = document.querySelector('.cc');
const cf = document.querySelector('.cf');
var iscc = false;
var iscf = false;
const i = -32.6292650731585; // intercept obtained by linear regression over 10000+ ratings
const s = 0.8315620555789333; // slope obtained by linear regression over 10000+ ratings
const output = document.querySelector('#output');
const cross = document.querySelector('#cross');
const inpt = document.querySelector('#inpt');
const about = document.querySelector('#about');
const modalBox = document.querySelector('#modal-box');
const close = document.querySelector('.close');

function predict(rating) {
  if(iscf){
    var ans = Math.round((rating*s)+i);
    output.textContent = "Your predicted Codeforces rating will be " + ans;
  }
  if(iscc){
    var ans = Math.round((rating-i)/s);
    output.textContent = "Your predicted Codechef rating will be " + ans;
  }
}

wrap.addEventListener('click', function() {
  card.classList.toggle('flipped');
  var rating = input.value;
  predict(rating);
});

cf.addEventListener('click',()=>{
    iscf = true;
    card.style.display = 'block';
    inpt.textContent ="Enter your Codechef rating : ";
})

cc.addEventListener('click',()=>{
    iscc = true;
    card.style.display = 'block';
    inpt.textContent ="Enter your Codeforces rating : ";
})

cross.addEventListener('click',()=>{
    input.value = null;
    card.style.display = 'none';
    card.classList.toggle('flipped');
    iscc = false;
    iscf = false;
});


about.addEventListener("click",()=>{
  modalBox.style.display = 'block';
});

close.onclick = function (){
  modalBox.style.display = 'none';
}
