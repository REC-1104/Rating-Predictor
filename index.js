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


function handleModal(){
  input.value = null;
  card.style.display = 'none';
  card.classList.toggle('flipped');
  iscc = false;
  iscf = false;
}

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

function start(){
  var rating = input.value;
  if(rating!=""){
    card.classList.toggle('flipped');
    predict(rating);
  }
  else{
  alert('Please enter a valid rating !')
  }
}

wrap.addEventListener('click', function() {
  var rating = input.value;
  if(rating!=""){
    card.classList.toggle('flipped');
    predict(rating);
  }
  else{
  alert('Please enter a valid rating !')
  }
});

cf.addEventListener('click',()=>{
    iscf = true;
    card.style.display = 'block';
    inpt.textContent ="Enter your Codechef rating";
    card.style.animation = '';
    card.classList.toggle('identifier');
})

cc.addEventListener('click',()=>{
    iscc = true;
    card.style.display = 'block';
    inpt.textContent ="Enter your Codeforces rating";
    card.style.animation = '';
    card.classList.toggle('identifier');
})

cross.addEventListener('click',()=>{
    handleModal();
});


about.addEventListener("click",()=>{
  modalBox.style.display = 'block';
});

close.onclick = function (){
  modalBox.style.display = 'none';
}

input.addEventListener("keypress", handleEnterKeyPress);

var handleEnterKeyPress = function (event) {
  if (event.key === "Enter") {
      event.preventDefault();
      predict(input.value)
      card.classList.toggle('flipped');

}
};

