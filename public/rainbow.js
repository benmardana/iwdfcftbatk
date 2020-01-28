$('.text').html(function(i, html) {
  var chars = $.trim(html).split('');

  return '<span>' + chars.join('</span><span>') + '</span>';
});

$('.link').html(function(i, html) {
  var chars = $.trim(html).split('');

  return (
    '<a href="https://fundraise.redcross.org.au/drr">' +
    chars.join('</a><a href="https://fundraise.redcross.org.au/drr">') +
    '</a>'
  );
});
