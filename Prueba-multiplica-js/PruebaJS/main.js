
function prueba()
{
  for(var i=0; i <101;i++)
  {
    var mul3=i%3;
    var mul5=i%5;
    var nuv=i;

    if(mul3==0&mul5==0)
    {
     mul3=6; 
     mul5=6;
    }
    
      switch(mul3)
      {
        case 0:
        mul5=7;
        console.log("multi")
        break;
        
       
      }

      switch(mul5)
      {
        case 0:
        console.log("it")
        break;
         case 1:
        console.log(i)
        break;

        case 2:
        console.log(i)
        break;
        
        case 3:
        console.log(i)
        break;

        case 4:
        console.log(i)
        break;

        
        
        case 6:
        console.log("multiplica")
        break;
      }
    
  }
}

prueba()

