/*程式大大Miller的code，請不要隨意幹走，2017*/
//tab mother
function openCitymother(TargetID,ImageID) {
   
    console.log('123456');
    var x = document.getElementById(TargetID).style.display;
                                          if (x == "none") 
                                          {
                                              
                                          document.getElementById(TargetID).style.display = "block";
                                              document.getElementById(ImageID).className = "foldeda";
                                          } else {
                                              
                                          document.getElementById(TargetID).style.display = "None";
                                              document.getElementById(ImageID).className = "unfoldeda";
                                          }
   
    
}
        
        function openCitymotherChild(TargetIDClassGroup,TargetID,TargetSpanID) {
            
   var i, tabcontent, imggp, IsSame;
            
            IsSame = false;
    tabcontent = document.getElementsByClassName(TargetIDClassGroup);
    for (i = 0; i < tabcontent.length; i++) {
        if(tabcontent[i].style.display == "block")
            {
                if(tabcontent[i].id == TargetID)
                    {
                       // console.log('IsSame');
                        IsSame = true;
                    }
            }
        tabcontent[i].style.display = "none";
    }
   // document.getElementById(TargetID).style.display = "block";
            
    imggp = document.getElementsByClassName("foldedb");
    for (i = 0; i < imggp.length; i++) {
        imggp[i].className = "unfoldedb"
    }
            if(IsSame == false)
                {
                    //console.log('LALALALALA');
    document.getElementById(TargetID).style.display = "block";
    document.getElementById(TargetSpanID).className = "foldedb"
                    
                }
            
}
// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click(裡面沒東西會出錯所以關掉);
//end of tab mother


//Tab
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}