
function facebookdemoji() { //facebook
    var targetsImg = $("i._3kkw");

    targetsImg.each( function(){
        var emoji = $(this)
            text = emoji.attr("style");
            textarr = text.split("/")
            text = textarr[textarr.length-1]
            textarr = text.split(".")
            text = textarr[0]
            //text = text.substring(0, 5) //1f602.png");
            if (text in codeToDescription) {
            text = codeToDescription[text][3][0]
            }
        emoji.after("[:" + text + ":]");
    });
}; 

function hangoutsdemoji() { //hangouts, currently doesn't work
    var targetsImg = $("span[class='Pt tGvGdc']");
    console.log("start")
    targetsImg.each( function(){
        console.log("each")
        var emoji = $(this)
            text = emoji.attr("data-emo");
            if (text in iconToDescription) {
            text = iconToDescription[text]
            }        
        emoji.after("[:" + text + ":]");
    });
    console.log("end")
};

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
	var v = textNode.nodeValue;
    for(key in codeToDescription){
        var start = codeToDescription[key][0][0]
        var end = codeToDescription[key][3][0]
        v = v.replace(start, start + "[:"+end+":]");
    }	
	textNode.nodeValue = v;
}

walk(document.body);
hangoutsdemoji();
facebookdemoji();
