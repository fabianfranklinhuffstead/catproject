/* 
Name:			Fabian 
Project name: 	Cat Project (Runaway Mouse)
Date Completed: 09/07/2017 
Description: 	A small application which tracks the users mouse
				and the sprite image reacts accordingly. For 
				responsive design flexbox is the solution which 
				is used. Image is then taken and split into 
				segments, on intervals of 0.1 the seconds the 
				background of the original image is changed. An
				object of directions is created as it is used 
				multiple times throughout as an identifier of
				where users mouse is related to the screen.
*/
var counter = 0;
var direction = "126px"; //inital value
var position;

/* Simple object used to make code more readable */
var directions = {
	up: document.getElementById("up"),
	down: document.getElementById("down"),
	right: document.getElementById("right"),
	left: document.getElementById("left")
}
 /* Set interval function used for animation to iterate through images */
setInterval(function(){

			/* Iteration through images using counter which updates each 0.1 second */
			switch(counter){
				case 0:
					position = "0px";
					break;
				case 1:
					position = "61.2px";
					break;
				case 2:
					position = "30.6px";
					break;
				default:
					position = "0px";

			}
			counter++;

		    if(counter === 3) {
		        counter = 0;
		    }

		    /* AttachEvent used to make sure compatible with mobile devices IE */

		    if (directions.up.addEventListener){
		    	directions.up.addEventListener("mouseover", Up);
			}else if (directions.up.attachEvent){
				directions.up.attachEvent("onclick", Up);
			}	
		    function Up(){
		    	direction = "126px";
		    }
			
			if (directions.down.addEventListener){
		    	directions.down.addEventListener("mouseover", Down);
		    }else if (directions.down.attachEvent){
		    	directions.down.attachEvent("mouseover", Down);
		    }
		    function Down(){		    	
		    	direction = "31.5px";
		    }

		    if (directions.right.addEventListener){
		    	directions.right.addEventListener("mouseover", Right);
		    }else if (directions.right.attachEvent){
		    	directions.right.attachEvent("mouseover", Right);
		    }
		    function Right(){		    	
		    	direction = "94.5px";
		    }

		    if (directions.left.addEventListener){
		    	directions.left.addEventListener("mouseover", Left);
		    }else if (directions.left.attachEvent){
		    	directions.left.attachEvent("mouseover", Left);
		    }
		    function Left(){		    	
		    	direction = "63px";
		    }

		   /* Cat is updated here with POSITION && DIRECTION value */
		   document.getElementById("cat").style.background = "url(./img/cat.png) "+position+" "+direction;
		}, 100 ); 






