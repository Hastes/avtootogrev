function go_to_block(event){
	var block = $(this);
	block.animate({
		opacity: 0.2,
	}, 100, function(){
		block.animate({
			opacity: 1,
		}, 500)
	})
}


$(document).ready(function() {
	$('[id=menuBtn]').on('click', go_to_block)
})


