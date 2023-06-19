//Create a reference for canvas 
canvas = document.getElementById("myCanvas")
ctx =canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";


//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	//upload car, and background images on the canvas.
bg_img=new Image();
bg_img.src=background_image;
bg_img.onload=uploadBackground;

gc_img=new Image();
gc_img.src=greencar_image;
gc_img.onload=uploadgreencar;


}
function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(gc_img,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y >=0) {
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
}
}
function down()
{
	//Define function to move the car downward
	if (greencar_y <=canvas.height-greencar_height) {
		greencar_y=greencar_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if (greencar_x >=0) {
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadgreencar();
}
}
function right()
{
	if (greencar_x <=canvas.width-greencar_width) {
		greencar_x=greencar_x+10;
		uploadBackground();
		uploadgreencar();
	//Define function to move the car right side
}
}
