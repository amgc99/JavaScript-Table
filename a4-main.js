var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)



window.onload =loadTableWithFilters;

function loadTableWithFilters()  {
    document.querySelector("#main-table-body").innerHTML = ''; 
    
    for(var i = 0; i < petData.length; i++) {
    document.querySelector("#main-table-body")
    if ((filterType == petData[i].type || filterType == "") && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) {
        var tr = document.createElement("tr");
        var tdL = document.createElement("td");
        var img = document.createElement("img");
  
        img.setAttribute("src", petData[i].img.src);
        img.setAttribute("alt", petData[i].img.alt);
        img.setAttribute("height", petData[i].img.height);
        img.setAttribute("width", petData[i].img.width);
        
        tdL.appendChild(img);
        tr.appendChild(tdL);
          
        var tdR = document.createElement("td");
        var h4 = document.createElement("h4");
        var name_text = document.createTextNode(petData[i].name);
        h4.appendChild(name_text);
        tdR.appendChild(h4);

          
        var p = document.createElement("p");
        p.innerHTML = petData[i].description;
        tdR.appendChild(p);
  
        var span = document.createElement("span");
          
        var spn_text= document.createTextNode("Age: " +  petData[i].age + " years old.");
        span.appendChild(spn_text);
        tdR.appendChild(span);
      
       
        tr.appendChild(tdR);
        document.querySelector("#main-table-body").appendChild(tr);
          }
    }  
};

function filterDog() {
    filterType = "dog";
    loadTableWithFilters();
};


function filterCat() {
    filterType = "cat";
    loadTableWithFilters();
};


function filterBird() {
    filterType = "bird";
    loadTableWithFilters();
};

function filter_zero_1() {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
};

function filter_1_3() {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
};

function filter_4_plus() {
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
};

function filterAllPets() {
    filterType = ""; 
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
};

