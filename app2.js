console.log('page 2');
const submit = document.querySelector('.submit');
const html = document.querySelector('.showResult');
const form = document.getElementById('form');

let men = 0;
let mensAge = 0;
let women = 0;
let womensAge = 0;
let others = 0;
let othersAge = 0;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  let age = document.getElementById('age').value;
  console.log('submit form get age:', age);

  let gender = document.querySelector('input[name="gender"]:checked').value;
  console.log('your chosen gender is:', gender);

  if (gender === 'Male') {
    men++;
    mensAge += Number(age);
  }
  if (gender === 'Female') {
    women++;
    womensAge += Number(age);
  }
  if (gender === 'Other') {
    others++;
    othersAge += Number(age);
  }

  console.log(`
Total men = ${men}
Average age of men = ${mensAge}
Total women = ${women}
Average age of women = ${womensAge}
Total other genders = ${others}
Average age of Others = ${othersAge}
`);

  let averageAgeMan = mensAge / men;
  let averageAgeWoman = womensAge / women;
  let averageAgeOthers = othersAge / others;

  const newResult = `
  <div class="men">
  <h3>Result for Men</h3>
    <h4>Total men = ${men}</h4>
    <h4>Average age of men = ${averageAgeMan}</h4>
    </div>
    <div class="women">
    <h3>Result for Women</h3>
    <h4>Total women = ${women}</h4>
    <h4>Average age of women = ${averageAgeWoman}</h4>
    </div>
    <div class="others">
    <h3>Result for Others</h3>
    <h4>Total other genders = ${others}</h4>
    <h4>Average age of Others = ${averageAgeOthers}</h4>
    </div>
    `;

  html.innerHTML = newResult;

  form.reset();
  return men, mensAge, women, womensAge, others, othersAge;
});

/* 
let allCheck = document.getElementsByName('radio');
let radioCheck;

for (let i = 0; i < allCheck.length; i++) {
  allCheck.forEach((btn) => {
    let gender = null;
    btn.addEventListener('click', (e) => {
      if (radioCheck == this) {
        this.checked = false;
        radioCheck = null;
      } else {
        radioCheck = this;
        gender = e.target.value;
        console.log(gender);
      }
    });
  });
} */
