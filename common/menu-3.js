//--- Create menu array. ---//

var cell = new Array(8) 

//--- Stuff menu array entries with objects. ---// 
//--- URL, ImageName, Alt  --//

cell[0] = new Array("", "", "")
cell[1] = new Array("index", "home", "Welcome")
cell[2] = new Array("elsat", "elsat", "English-Language Self-Assessment Test")
cell[3] = new Array("engl","engl","If English is Not Your First Language")
cell[4] = new Array("rhetoric","rhetoric","Rhetoric")
cell[5] = new Array("reader","reader","Reader")
cell[6] = new Array("handbook","handbook","Handbook")


function LeftMenu(active) {
	for(var i=1; i<=6; i++)	{
	
	if (i != active) {

			document.write('<A HREF="' + cell[i][0] + '.html" onMouseOver="SwapImage(this,\'im' + i + '\',\'images/buttons/' + cell[i][1] + '_over.gif\')">');
			document.write('<IMG NAME="im' + i + '" SRC="images/buttons/' + cell[i][1] + '_up.gif"  Border="0" ALT="' + cell[i][2] + '"></A><BR>');

			} else {
	
			document.write('<IMG SRC="images/buttons/' + cell[i][1] + '_act.gif"  BORDER="0" ALT="' + cell[i][2] + '"><BR>');

			}
		}
	}


//--- Rollover function. ---// 


function SwapImage(id,ident,RollOverImage) {
  if(document.images) {
    image            = document.images[ident];
    image.MouseOutImage      = new Image();
    image.RollOverImage     = new Image();
    image.MouseOutImage.src  = document.images[ident].src;
    image.RollOverImage.src = RollOverImage;
    image.src        =image.RollOverImage.src;
    id.onmouseout  = new Function("var image=document."+ident+"; image.src=image.MouseOutImage.src;");
    id.onmouseover = new Function("var image=document."+ident+"; image.src=image.RollOverImage.src;");
  }
}