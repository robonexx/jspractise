let nav = document.querySelector('#navbar')
/* console.log('nav js', nav) */
let prevScrollpos = window.pageYOffset;

    window.addEventListener('scroll', function () {
        let currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos)

      if (prevScrollpos > currentScrollPos) {
        nav.classList.remove('hidden');
        nav.classList.add('show');
      } else {
        nav.classList.add('hidden');
        nav.classList.remove('show');
      }
        prevScrollpos = currentScrollPos;
        console.log(prevScrollpos)
    });


