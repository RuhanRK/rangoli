
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    console.log(event.target)
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// pause video
$('.close').click(function(){
	$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});
$(window).click(function(){
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    $('#overlay').modal('hide');
});


$('#overlay').modal('show');

// setTimeout(function() {
//     $('#overlay').modal('hide');
// }, 2000);

/*==========Register Service Worker==========*/
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=> {
    navigator.serviceWorker
      .register('./sw_file.js', {scope: './'})
        // checking whether it's support browser or not
        .then(res => console.log(`Service Worker Registered: ${res}`))
        .catch(err => console.log(`Something Wrong here ${err}`))
  });
};
