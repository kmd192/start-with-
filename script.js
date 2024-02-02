function LinksSetColor(color){
  var alist = document.querySelectorAll("a");
   for(var i=0; i<alist.length; i++){
    alist[i].style.color = color;
   }
}

function BodySetColor(color){
  document.querySelector("body").style.color = color;
  }

function BodySetBackgroundColor(color){
  document.querySelector("body").style.backgroundColor = color;
  }        
     
function night_day(self){
        if(self.value === "night"){
          BodySetBackgroundColor("black");
          BodySetColor("white");
          LinksSetColor("powderblue");
          self.value = "day";
          
        } else {
          BodySetBackgroundColor("white");
          BodySetColor("black");
          LinksSetColor("blue");
          self.value = "night";
          }
        }