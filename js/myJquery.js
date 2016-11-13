$('.nav').on('mouseover', function(event){
  $(this).css({backgroundColor: 'white'}),
    $(this).css({color: 'black'});
});

$('.nav').on('mouseleave', function(event){
  $(this).animate({backgroundColor: 'black'},'fast'),
  $(this).animate({color: 'white'},'fast');
});