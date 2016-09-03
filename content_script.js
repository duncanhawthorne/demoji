walk(document.body);

//Credit to https://github.com/hank/cloud-to-butt

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) 
{

dict = 
{"😀": "Grinning Face", "😁": "Grinning Face With Smiling Eyes", "😂": "Face With Tears of Joy", "😃": "Smiling Face With Open Mouth", "😄": "Smiling Face With Open Mouth and Smiling Eyes", "😅": "Smiling Face With Open Mouth and Cold Sweat", "😆": "Smiling Face With Open Mouth and Tightly-Closed Eyes", "😉": "Winking Face", "😊": "Smiling Face With Smiling Eyes", "😋": "Face Savouring Delicious Food", "😎": "Smiling Face With Sunglasses", "😍": "Smiling Face With Heart-Shaped Eyes", "😘": "Face Throwing a Kiss", "😗": "Kissing Face", "😙": "Kissing Face With Smiling Eyes", "😚": "Kissing Face With Closed Eyes", "🙂": "Slightly Smiling Face", "🤗": "Hugging Face", "😇": "Smiling Face With Halo", "🤓": "Nerd Face", "🤔": "Thinking Face", "😐": "Neutral Face", "😑": "Expressionless Face", "😶": "Face Without Mouth", "🙄": "Face With Rolling Eyes", "😏": "Smirking Face", "😣": "Persevering Face", "😥": "Disappointed but Relieved Face", "😮": "Face With Open Mouth", "🤐": "Zipper-Mouth Face", "😯": "Hushed Face", "😪": "Sleepy Face", "😫": "Tired Face", "😴": "Sleeping Face", "😌": "Relieved Face", "😛": "Face With Stuck-Out Tongue", "😜": "Face With Stuck-Out Tongue and Winking Eye", "😝": "Face With Stuck-Out Tongue and Tightly-Closed Eyes", "😒": "Unamused Face", "😓": "Face With Cold Sweat", "😔": "Pensive Face", "😕": "Confused Face", "🙃": "Upside-Down Face", "🤑": "Money-Mouth Face", "😲": "Astonished Face", "😷": "Face With Medical Mask", "🤒": "Face With Thermometer", "🤕": "Face With Head-Bandage", "🙁": "Slightly Frowning Face", "😖": "Confounded Face", "😞": "Disappointed Face", "😟": "Worried Face", "😤": "Face With Look of Triumph", "😢": "Crying Face", "😭": "Loudly Crying Face", "😦": "Frowning Face With Open Mouth", "😧": "Anguished Face", "😨": "Fearful Face", "😩": "Weary Face", "😬": "Grimacing Face", "😰": "Face With Open Mouth and Cold Sweat", "😱": "Face Screaming in Fear", "😳": "Flushed Face", "😵": "Dizzy Face", "😡": "Pouting Face", "😠": "Angry Face", "😈": "Smiling Face With Horns", "👿": "Imp", "👹": "Japanese Ogre", "👺": "Japanese Goblin", "💀": "Skull", "👻": "Ghost", "👽": "Extraterrestrial Alien", "🤖": "Robot Face", "💩": "Pile of Poo", "😺": "Smiling Cat Face With Open Mouth", "😸": "Grinning Cat Face With Smiling Eyes", "😹": "Cat Face With Tears of Joy", "😻": "Smiling Cat Face With Heart-Shaped Eyes", "😼": "Cat Face With Wry Smile", "😽": "Kissing Cat Face With Closed Eyes", "🙀": "Weary Cat Face", "😿": "Crying Cat Face", "😾": "Pouting Cat Face", "👦": "Boy", "👧": "Girl", "👨": "Man", "👩": "Woman", "👴": "Older Man", "👵": "Older Woman", "👶": "Baby", "👱": "Person With Blond Hair", "👮": "Police Officer", "👲": "Man With Gua Pi Mao", "👳": "Man With Turban", "👷": "Construction Worker", "👸": "Princess", "💂": "Guardsman", "🕵": "Sleuth or Spy", "🎅": "Father Christmas", "👰": "Bride With Veil", "👼": "Baby Angel", "💆": "Face Massage", "💇": "Haircut", "🙍": "Person Frowning", "🙎": "Person With Pouting Face", "🙅": "Face With No Good Gesture", "🙆": "Face With OK Gesture", "💁": "Information Desk Person", "🙋": "Happy Person Raising One Hand", "🙇": "Person Bowing Deeply", "🙌": "Person Raising Both Hands in Celebration", "🙏": "Person With Folded Hands", "🗣": "Speaking Head in Silhouette", "👤": "Bust in Silhouette", "👥": "Busts in Silhouette", "🚶": "Pedestrian", "🏃": "Runner", "👯": "Woman With Bunny Ears", "💃": "Dancer", "🕴": "Man in Business Suit Levitating", "👫": "Man and Woman Holding Hands", "👬": "Two Men Holding Hands", "👭": "Two Women Holding Hands", "💏": "Kiss", "💑": "Couple With Heart", "👪": "Family", "💪": "Flexed Biceps", "👈": "White Left Pointing Backhand Index", "👉": "White Right Pointing Backhand Index", "👆": "White Up Pointing Backhand Index", "🖕": "Reversed Hand With Middle Finger Extended", "👇": "White Down Pointing Backhand Index", "🖖": "Raised Hand With Part Between Middle and Ring Fingers", "🤘": "Sign of the Horns", "🖐": "Raised Hand With Fingers Splayed", "👌": "OK Hand Sign", "👍": "Thumbs Up Sign", "👎": "Thumbs Down Sign", "👊": "Fisted Hand Sign", "👋": "Waving Hand Sign", "👏": "Clapping Hands Sign", "👐": "Open Hands Sign", "💅": "Nail Polish", "👂": "Ear", "👃": "Nose", "👣": "Footprints", "👀": "Eyes", "👁": "Eye", "👅": "Tongue", "👄": "Mouth", "💋": "Kiss Mark", "👓": "Eyeglasses", "🕶": "Dark Sunglasses", "👔": "Necktie", "👕": "T-Shirt", "👖": "Jeans", "👗": "Dress", "👘": "Kimono", "👙": "Bikini", "👚": "Womans Clothes", "👛": "Purse", "👜": "Handbag", "👝": "Pouch", "🎒": "School Satchel", "👞": "Mans Shoe", "👟": "Athletic Shoe", "👠": "High-Heeled Shoe", "👡": "Womans Sandal", "👢": "Womans Boots", "👑": "Crown", "👒": "Womans Hat", "🎩": "Top Hat", "🎓": "Graduation Cap", "💄": "Lipstick", "💍": "Ring", "🌂": "Closed Umbrella", "💼": "Briefcase", }

	var v = textNode.nodeValue;

    for(key in dict){
    var value = dict[key];
    v = v.replace(key, key + "[:"+value+":]");
    }	
	textNode.nodeValue = v;
}


