// Create smooth click and scroll based on in page navigation
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 400);
        return false;
      }
    }
  });
});

function scrollCenterContent(itemContainer, childContainer, offset) {
  $(itemContainer).each(function(i, section) {
    var content = $(section).children(childContainer)[0];
    var h = ($(section).height() - $(content).height()) - offset;
    $(content).css('margin-top', (h / 2));
  });
}

function zoomInBanner(zoomItem, first, second){
  $(zoomItem).animate({ 'background-size' : first }, 8000)
    .animate({ 'background-size' : second }, 8000,
    function(){
      setTimeout(zoomInBanner(zoomItem, first, second), 4000);
    });
}

$(document).ready(function() {
  scrollCenterContent("#main-banner", '.ctn-container', 0);
  scrollCenterContent(".project-box", '.proj-overlay', -20);

  //zoomInBanner('#main-banner', '65%', '55%');

  $('#banner-header').addClass('visible');
});

window.onresize = function(event) {
  scrollCenterContent("#main-banner", '.ctn-container', 0);
  scrollCenterContent(".project-box", '.proj-overlay', -20);
};
