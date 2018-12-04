
// replace selected words
$('.noun').each(function(){
	let word = $(this).html();
	console.log(word);
	let emojiChar = searchBetterEmojiInventory(word);
	console.log(emojiChar);
	if(emojiChar !== null)
		$(this).html(emojiChar);
});



// replace all words
let emojifier = $('.emojifier').html();
emojifier = emojifier.toLowerCase();
// actually we want to check if there's punctuation at the end
emojifier = emojifier.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
emojifier = emojifier.split(' ');
for(let i=0; i<emojifier.length; i++){
	let word = emojifier[i];
	let emojiChar = searchBetterEmojiInventory(word);
	if(emojiChar !== null)
		emojifier[i] = emojiChar;
}
emojifier = emojifier.join(' ');
$('.emojifier').html(emojifier);


