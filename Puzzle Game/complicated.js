
      
var arrleft = new Array();
var arrtop = new Array();
var tablearr = new Array();
var where = new Array();
   for(var i = 0; i < 9; i++){
 
   tablearr[i] = -1;//if the selected cell is filled or not
   where[i] = -1;
   }

function imagesFunc(){
  var top, left;
  var num = 0;

  for(top=300 ; top > 0; top -=100)
  {
      for(left =300; left > 0; left -=100)
      {
          num++;
          $("#i" +num).css("background-position-x",left +"px");
          $("#i" +num).css("background-position-y",top  +"px");
      }
  }
    }

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }



function randomPosition()
{
    var no1;
    var no2;
    for(var num = 1; num <= 9; num++)
    {
        no1 = rand(3, 197);
        no2 = rand(3, 197);
        $("#i" +num).css("top", no1 +"px");
        $("#i" +num).css("left", no2 +"px");
       arrleft[num-1] = no2;
       arrtop[num-1] = no1;
    }
}

var correct = 0;

function colorset(){
    $(".lil").click(function(){
        $(".lil").css("border-color", "white");
    })
    var temp;
    $(".lil").click(function(event) {
        $("#" + event.target.id).css({"border-color" : "yellow"});  
        temp = event.target.id;
    });
}


function lilClick(){

    var temp = 0;
    
    $(".lil").click(function(event){
        temp =event.target.id;
    });


    var s;
    
    $("td").click(function(event){
        s =event.target.id;

       if(correct < 9)
       { 
        if(tablearr[s.slice(-1)-1] == 1 && temp == 0){ // ELSE IF SEGMENT TO EMPTY THE CELL AND SEND THE PIECE BACK
            temp = 0;
            for(var i = 0; i < 9; i++)
            {
                if(where[i] == s.slice(-1))
                {
                    var x = i+1;
                }
            }
            if(x == s.slice(-1))
            correct--;
            $("#i"+x).css("left",arrleft[x-1]+"px");
            $("#i"+x).css("top",arrtop[x-1]+"px");
            tablearr[s.slice(-1)-1] = -1;

        }else if(s !=0 &&tablearr[s.slice(-1)-1]==1 && temp != 0){ //ELSE IF SEGMENT TO SWAP PIECES
            for(var i = 0; i < 9; i++)
            {
                if(where[i] == s.slice(-1))
                {
                    var x = i+1;
                }
            }
            var p = $("#i"+x).position();
            $("#i"+x).css("left",arrleft[x-1]+"px");
            $("#i"+x).css("top",arrtop[x-1]+"px");
            where[x-1] = -1; //alert(x+" geri döndü");
            if(x == s.slice(-1))
            correct--;
            //alert(s.slice(-1)+" boşaldı");
            tablearr[s.slice(-1)-1] = -1;
            $("#"+temp).css("left",p.left+"px");
            $("#"+temp).css("top",p.top+"px");
            where[temp.slice(-1)-1] = s.slice(-1);
            tablearr[s.slice(-1)-1] = 1;
            if(temp.slice(-1) == s.slice(-1))
            correct++;
            temp = 0;
            s = 0;

        }
        else if(tablearr[s.slice(-1)-1] == -1){ //ELSE IF SEGMENT TO FILL AN EMPTY CELL WITH A PIECE
       switch(s)
       {
       case 't1':
          $("#"+temp).css("left", "386px");
          $("#"+temp).css("top", "-2px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1); s = 0; temp = 0;$(".lil").css("border-color", "white");
          break;

          case 't2': 
          $("#"+temp).css("left", "486px");
          $("#"+temp).css("top", "-2px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");
          break;

          case 't3': 
          $("#"+temp).css("left", "586px");
          $("#"+temp).css("top", "-2px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");
          break;

          case 't4':
          $("#"+temp).css("left", "386px");
          $("#"+temp).css("top", "98px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");
          break;

          case 't5': 
          $("#"+temp).css("left", "486px");
          $("#"+temp).css("top", "98px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");     
          break;

          case 't6': 
          $("#"+temp).css("left", "586px");
          $("#"+temp).css("top", "98px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");
          break;

          case 't7':
          $("#"+temp).css("left", "386px");
          $("#"+temp).css("top", "198px");
          if(s.slice(-1) == temp.slice(-1)) 
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");
           break;

          case 't8': 
          $("#"+temp).css("left", "486px");
          $("#"+temp).css("top", "198px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");
                    break;

          case 't9': 
          $("#"+temp).css("left", "586px");
          $("#"+temp).css("top", "198px");
          if(s.slice(-1) == temp.slice(-1))
          correct++;tablearr[s.slice(-1)-1] = 1;where[temp.slice(-1)-1] = s.slice(-1);s = 0; temp = 0;$(".lil").css("border-color", "white");
       break;

       }
    }}
     if(correct == 9)
    {
        $("h1").css("visibility", "hidden");
        $('body').append('<div id = "con" >Congratulations</div>');   
        $("#con").animate({opacity: '1'}, "slow"); 
        $("#con").animate({opacity: '0'}, "slow"); 
        
    }

    });
   
    
    

  


}
    


function hintClick(){
    
        $("#hint").click(function(){
       $("h1").toggle();
   })

}

var f = 0;
var bgarr = new Array('bg0', 'bg1', 'bg2', 'bg3', 'bg4');
function changeClick(){
 
    $("#change").click(function(){
        var temp = bgarr[f];
        $("#b1").removeClass(temp);
        $(".lil").removeClass(temp);
        f++; if(f == 5) f= 0;
        var str = "bg" +f;
        $("#b1").addClass(str);
        $(".lil").addClass(str);
    });
}




    
