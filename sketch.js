var c;
var eraser = false;
 
function setup() {
 	createCanvas(windowWidth, windowHeight);
 	c = color(0);
}
 
function draw()
{
	// display instructions
	noStroke();
}
 
function mouseDragged() 
{ 
    if (eraser)
    {
        strokeWeight(30);
    }
    else
    {
        strokeWeight(10);
    }
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(255, 0, 0);
	}
    if (key == 'g' || key == 'G')
    {
        c = color(0, 255, 0);
    }
    if (key == 'Tab')
    {
        eraser = !eraser;
        if (eraser)
        {
            c = color(255, 255, 255);
        }
        else
        {
            c = color(0);
        }
    }
    if (key == 'e' || key == 'E')
    {
        c = color(255, 255, 255);
    }
    if (key == 'Backspace')
    {
        setup();
    }
}