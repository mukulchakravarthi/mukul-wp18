let madlibText = $('.compromise').html();

let id = 0;

madlibText = madlibText.split(' ').map(function(word, index){
	let doc = window.nlp(word);
	let crazyObj = doc.values().original.list[0].terms[0].tags;
	console.log(crazyObj);
	let output = word;
	if('Noun' in crazyObj && Math.random() < 0.2)
		output = '<input class="' + class + '" id="' + id + '" type="text" />';
	else if('Adjective' in crazyObj && Math.random() < 0.2)
		output = '<input class="adjective" id="' + id + '" type="text" />';
	else if('Adverb' in crazyObj && Math.random() < 0.2)
		output = '<input class="adverb" id="' + id + '" type="text" />';
	if(output !== word)
		id++;
	return output;
}).join(' ');

$('.madlibs').html(madlibText);

