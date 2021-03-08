var bird = '';

var birdtype= '';

var numofbirds ='';

var result = '';

var birdname = function()
    {
     bird = prompt ("what is your favourite Bird:canary or parrot?");

     while (bird != 'canary' && bird != 'parrot')
     {
    bird= prompt ("what is your favourite Bird:canary or parrot?");
     }



if (bird == "canary")
  {
      birdtype = '<img src="canary.jpg"/>';
  }

else 
{
    birdtype = '<img src="parrot.webp"/>';
}

 numofbirds = prompt("How many Birds do you want?");



for (var i= 0; i<numofbirds; i++)
{
    result=result+birdtype;
}

document.write(result);
}

birdname ();



var price ='';
function getprice ()
{

    if (bird == "canary")
    {
        price = numofbirds * 5;
        document.write('<h1>The Price Is</h1>');
        document.write(price);

    }
  
  else 
  {
    price = numofbirds * 20;
    document.write('<h1>The Price Is</h1>');
    document.write(price);
  } 
  
}
getprice();
