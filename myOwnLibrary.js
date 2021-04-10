/*function isTouching(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
      object2.x - object1.x < object1.width/2 + object2.width/2 && 
      object1.y - fixedRect.y < object1.height/2 + fixedRect.height/2 && 
     object2.y - object1.y < object1.height/2 + object2.height/2){
     // tell whether rectangles touched (yes/ true)
     return true;
    }
    else{
     return false;
    } 
  }


  function bounceOff(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
        object2.x - object1.x < object1.width/2 + object2.width/2 && 
        object1.y - fixedRect.y < object1.height/2 + fixedRect.height/2 && 
       object2.y - object1.y < object1.height/2 + object2.height/2){

        var VX = object1.velocityX;
        var VY = object1.velocityY;

        object1.velocityX = object2.velocityX;
        object1.velocityY = object2.velocityY;
        object2.velocityX = VX;
        object2.velocityY = VY;


    }

  }

  
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }*/