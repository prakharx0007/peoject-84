canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_array = ["img_1.jfif","img_2.jfif","img_3.jfif","img_4.jfif"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_x = 10;
rover_y = 10;
rover_height = 90;
rover_width = 100;
rover_image = "rover.png";
background_image = nasa_array[random_number];
console.log("background image is " + background_image );

function add()
{
    background_tag = new Image() ;
    background_tag.onload = uploadBackgorund;
    background_tag.src = background_image ; 

    rover_tag = new Image() ;
    rover_tag.onload = uploadrover ;
    rover_tag.src = rover_image ; 
}
function uploadBackgorund()
{
    ctx.drawImage(background_tag , 0 , 0 , canvas.width , canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_tag , rover_x , rover_y , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == '38' )
    {
        up();
        console.log("up arrow pressed");

    }
    if(keypress == '40')
    {
        down();
        console.log("down arrow is pressed");
    }
    if(keypress == '37')
    {
        left();
        console.log("left arrow is pressed");
    }
    if(keypress == '39')
    {
        right();
        console.log("right arrow is pressed");
    }                
}

function up()
    {

    if(rover_y >= 0)
    {
        rover_y = rover_y - 10 ;
        console.log("When up arrow is pressed x  = " + rover_x + " y = "+ rover_y);
        uploadBackgorund();
        uploadrover();
    }
}

function down()
    {
        if(rover_y <= 500)
        {
            rover_y = rover_y + 10 ; 
            console.log( "when up arrow is pressed x = " + rover_x + "y = "+ rover_y);
            uploadBackgorund();
            uploadrover();
        }
    }
function left()
{
    if(rover_x >= 0 )
    {
        rover_x = rover_x - 10 ; 
        console.log( "when up arrow is pressed x = " + rover_x + "y = "+ rover_y);
        uploadBackgorund();
        uploadrover();
    }
}
 
function right()
{
    if(rover_x <= 700 )
    {
        rover_x = rover_x + 10 ;
        console.log( "when up arrow is pressed x = " + rover_x + "y = "+ rover_y);
        uploadBackgorund();
        uploadrover();
    } 
}
