let emojiNames = Object.keys(emojis);


// created a better emoji structure
let betterEmos = [];
for(let i=0; i<emojiNames.length; i++){
	let entry = emojis[emojiNames[i]];
	entry.splitName = emojiNames[i].split('_');
	entry.emojiName = emojiNames[i];
	betterEmos.push(entry);
}

// takes a word string and
// returns an emoji or null
function searchBetterEmojiInventory(word){
	let found = null;
	for(let i=0; i<betterEmos.length; i++){
		if(betterEmos[i].emojiName === word){
			found = betterEmos[i].char;			
		}
	}
	if(!found){
		for(let i=0; i<betterEmos.length; i++){
			for(let h=0; h<betterEmos[i].keywords.length; h++){
				if(betterEmos[i].keywords[h] === word)
					found = betterEmos[i].char;
			}
		}
	}
	if(!found){
		for(let i=0; i<betterEmos.length; i++){
			for(let h=0; h<betterEmos[i].splitName.length; h++){
				if(betterEmos[i].splitName[h] === word)
					found = betterEmos[i].char;
			}
		}		
	}
	return found;
}
