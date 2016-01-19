 $( document ).ready(function() {
    $('button').on('click', function() {
	  var col = $(this).closest('.card');
	  var amount = col.data('price');
	  var price = $('<p>From $' +amount+ '</p>');
	  col.append(price);
	  $(this).remove(); 
	});
});