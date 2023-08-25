/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

window.addEventListener('DOMContentLoaded', () => {
  console.log('ready');
  // document.addEventListener('keydown', function(e) {
  //   console.log(e.key);
  //   if (e.key == "1"){
  //     window.location.replace('index.html');
  //   }
  // });

  const myCarousel = document.getElementById('poapCarousel');

  animateSlide(0);

  // This fires once the slide has FINISHED sliding
  myCarousel.addEventListener('slid.bs.carousel', event => {
    console.log('slid');
    resetSlide(event.from);
    animateSlide(event.to);
  })
});

function animateSlide(slideID) {
  let animationTarget = $('#slide' + slideID + ' .animated');
  console.log("Animating slide:", slideID)
  gsap.to(animationTarget, {autoAlpha: 1, x: 0, duration: 0.7, stagger: .2});
}

function resetSlide(slideID) {
  let clearTarget = $('#slide' + slideID + ' .animated');
  console.log("Clearing slide:", slideID)
  gsap.set(clearTarget, {clearProps: 'all'});
}
