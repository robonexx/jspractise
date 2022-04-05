console.log('js connected')

const btnScrollToTop = document.querySelector('.btnScrollToTop')
const btnScrollToBottom = document.querySelector('.btnScrollToBottom')
const btnReadMore = document.querySelector('.btnReadMore')

let w = window.innerWidth;
let h = window.innerHeight;
document.querySelector(".showHeight").innerHTML = "Width: " + w + "<br>Height: " + h;


btnScrollToTop.addEventListener('click', () => {
    console.log('btn clicked')
    window.scrollTo(0,0)
})
btnReadMore.addEventListener('click', () => {
    console.log('btn clicked')
    const bottomSection = h * 3
    window.scrollBy(0,bottomSection)
})

btnScrollToBottom.addEventListener('click', () => {
    console.log('btn clicked')
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
})