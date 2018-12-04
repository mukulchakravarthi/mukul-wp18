

// takes the text from .manual
// and grabs all the inputs
let blankList = '';
$('.manual span').each(function(){
	let wordType = this.className.replace('-', ' ');
	blankList += '<li><input type="text" placeholder="' + wordType + '"></li>';
});
$('.blanks').append(blankList);


// this takes the user value
// from inputs previously generated
// and replaces the spanned words
function go(){
	let inputText = [];
	$('.blanks input').each(function(){
		inputText.push($(this).val());
	});
	$('.blanks').remove();
	$('.manual').show();
	$('.manual span').each(function(index){
		let replacedSpan = '<span>' + inputText[index] + '</span>';
		$(this).replaceWith(replacedSpan);
	});
}