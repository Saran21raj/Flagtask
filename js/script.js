let details=[{
    Flag:"https://restcountries.eu/data/deu.svg",
    Country:"Germany",
    Population:"81,770,900",
    Region:"Europe",
    Capital:"Berlin"
},
{
    Flag:"https://restcountries.eu/data/usa.svg",
    Country: "United States of America",
    Population:"323,947,000",
    Region:"Americas",
    Capital:"Washington, D.C"
},
{ 
    Flag:"https://restcountries.eu/data/bra.svg",
    Country:"Brazil",
    Population:"206,135,893",
    Region:"Americas",
    Capital:"Brasilia"
},
{   
    Flag:"https://restcountries.eu/data/isl.svg",
    Country:"Iceland",
    Population:"334,300",
    Region:"Europe",
    Capital:"Reykjavik"
}];
function countryDetails(i){
    const outerBox =document.createElement("div");
    outerBox.setAttribute("class","outerBox"); 
    const flag=document.createElement("img");
    flag.setAttribute("class","flag");
    flag.setAttribute("src",`${details[i]["Flag"]}`)
    outerBox.append(flag);
    const info=document.createElement('div')
    info.innerHTML=`<h2> ${details[i]["Country"]}</h2>
    <p>Population: ${details[i]["Population"]}</p>
    <p>Region: ${details[i]["Region"]}</p>
    <p>Capital: ${details[i]["Capital"]}</p>`
    outerBox.append(info);
    document.body.append(outerBox);
}
for(let i=0;i<4;i++){
    countryDetails(i);
}