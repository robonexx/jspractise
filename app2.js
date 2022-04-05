console.log('page 2');

const submit = document.querySelector('.submit');

let age = null;

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

  if (gender === 'Man') {
    men++;
    mensAge += Number(age);
  }
  if (gender === 'Woman') {
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
  return men, mensAge, women, womensAge, others, othersAge;
});

men = men;

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
