$(document).ready(function() {
  $('.button-gallery[filter="er"]').click(function() {
    if($(this).attr('val')=='off') {
      $('.button-gallery[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.projects__gallery > div').hide(300);
      $('.projects__gallery > div[filter="er"]').show(300);
    }
  });
  $('.button-gallery[filter="el"]').click(function() {
    if($(this).attr('val')=='off') {
      $('.button-gallery[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.projects__gallery > div').hide(300);
      $('.projects__gallery > div[filter="el"]').show(300);
    }
  });
  $('.button-gallery[filter="pl"]').click(function() {
    if($(this).attr('val')=='off') {
      $('.button-gallery[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.projects__gallery > div').hide(300);
      $('.projects__gallery > div[filter="pl"]').show(300);
    }
  });
  $('.button-gallery[filter="re"]').click(function() {
    if($(this).attr('val')=='off') {
      $('.button-gallery[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.projects__gallery > div').hide(300);
      $('.projects__gallery > div[filter="re"]').show(300);
    }
  });
  $('.button-gallery[filter="wr"]').click(function() {
    if($(this).attr('val')=='off') {
      $('.button-gallery[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.projects__gallery > div').hide(300);
      $('.projects__gallery > div[filter="wr"]').show(300);
    }
  });
  $('.button-gallery[filter="all"]').click(function() {
    if($(this).attr('val')=='off') {
      $('.button-gallery[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.projects__gallery > div').show(300);
    }
  });





});

