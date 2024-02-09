// Stop Marquee 
const marquee = document.getElementById('marqueeStop');

marquee.addEventListener('mouseover', function () {
    this.stop();
});

marquee.addEventListener('mouseout', function () {
    this.start();
});
// Stop Marquee 


// Script to show the toast on page load 
document.addEventListener('DOMContentLoaded', function () {
    var toastTrigger = document.getElementById('liveToastBtn');
    var toast = new bootstrap.Toast(document.getElementById('liveToast'));

    toastTrigger.addEventListener('click', function () {
        toast.show();
    });

    // Trigger toast on page load
    toast.show();
});
// Script to show the toast on page load  