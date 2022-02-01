var images = ["Haikyu!_To_The_Top_Part_2.jpg","hinata.jpg","kageyama.jpg","kenma.jpg","tsukishima.jpg"]
var names = ["haikyuu!!","Hinata", "Kageyama", "Kenma", "Tsukishima"];
var i = 0;
function update()
{
    i++;
    var numbers_of_member_in_array = 4
    if(i > numbers_of_member_in_array)
      {
          i = 0;
      }
    
  
    var updatedImage = images [i];
    document.getElementById("character_member_image").src = updatedImage;
    document.getElementById("Haikyu!_To_The_Top_Part_2.jpg").src = updatedImage;
    document.getElementById("hinata.jpg").src = updatedImage;
    document.getElementById("kageyama.jpg").src = updatedImage;
    document.getElementById("kenma.jpg").src= updatedImage;
    document.getElementById("tsukishima.jpg").src= updatedImage;
    
    var updatedName = name [i] ;
    document.getElementById("character_member_name").innerHTML = updatedName;
    document.getElementById("Haikyuu!").innerHTML = updatedName;
    document.getElementById("Hinata").innerHTML = updatedName;
    document.getElementById("Kageyama").innerHTML = updatedName;
    document.getElementById("Kenma").innerHTML = updatedName;
    document.getElementById("Tsukishima").innerHTML= updatedName;
    
    
        

}
