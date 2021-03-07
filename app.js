var bird = prompt ("what is your favourite Bird:canary or parrot?");

while (bird != 'canary' && bird != 'parrot')
     {
         bird = prompt ("what is your favourite Bird:canary or parrot?");
     }

var birdtype= '';

if (bird == "canary")
  {
      birdtype = '<img src="canary.jpg"/>';
  }

else 
{
    birdtype = '<img src="parrot.webp"/>';
}

var numofbirds = prompt("How many Birds do you want?");

var result = '';

for (var i= 0; i<numofbirds; i++)
{
    result=result+birdtype;
}

document.write(result);