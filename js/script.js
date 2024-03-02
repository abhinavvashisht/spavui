// Stop Marquee 
const marquee = document.getElementById('marqueeStop');

marquee.addEventListener('mouseover', function () {
    this.stop();
});

marquee.addEventListener('mouseout', function () {
    this.start();
});
// Stop Marquee 


