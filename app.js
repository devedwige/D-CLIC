const titreSpans=document.querySelectorAll("h5 span");
window.addEventListener("load" ,() => {
   
const TL = gsap.timeline({paused: true});
TL.staggerForm(titreSpans, 1, {top: -50, opacity: 0, ease:"power2.out"}, 0.3)
TL.play();

})