console.log('js connected');
const submitBtn = document.querySelector('#formSubmit');
const modal = document.querySelector('#modal');
let uName = document.querySelector('#uName');
let nameInput = document.querySelector('.nameInput');
let welcome = document.querySelector('#welcome');


// writing the name on the card so the visitor can se the name
uName.addEventListener('input', (txt) => {
  nameInput.textContent = txt.target.value;
});

// getting the name from localstorage

let visitor = localStorage.getItem('name')


window.onload = function () {
  // check localstorage if message has already been seen
  
  let checked = localStorage.getItem('checked');

  if (checked === 'true') {
    modal.style.display = 'none';
    return

    // selector for msg button
  } else {
    modal.style.display = 'block';

  }
  // change to true here to make it work and not show modal again if it works a pop up message
  localStorage.setItem('checked', 'true');  
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('name', uName.value);
  modal.style.display = 'none';
  window.location.reload()
});

let message = `
Welcome ${visitor ? visitor : 'Unknown'}!
`;
welcome.textContent = message;

const btnScrollToTop = document.querySelector('.btnScrollToTop');
const btnScrollToBottom = document.querySelector('.btnScrollToBottom');
const btnReadMore = document.querySelector('.btnReadMore');

let w = window.innerWidth;
let h = window.innerHeight;

btnScrollToTop.addEventListener('click', () => {
  console.log('btn clicked');
  window.scrollTo(0, 0);
});
btnReadMore.addEventListener('click', () => {
  console.log('btn clicked');
  const bottomSection = h * 3;
  window.scrollBy(0, bottomSection);
});

btnScrollToBottom.addEventListener('click', () => {
  console.log('btn clicked');
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
});
