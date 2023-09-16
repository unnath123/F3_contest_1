const Api_key = "95751bfe"
let searchele = document.getElementById("searchVal")


function renderUi(array){
    const mainContainer = document.getElementById("m-cont");
    // console.log(array.Search[0])
    for(let i=0;i<10;i++){
        const divEle = document.createElement("div");
        divEle.className = "item1";
        divEle.innerHTML = `
                <div class="image1"><img src=${array.Search[i].Poster} alt="poster"></div>
                <div class="number"><h1 class="num">${i}</h1></div>
                <div class="title">${array.Search[i].Title}</div>`  
    
        mainContainer.appendChild(divEle) 
    }
}

async function fetchDetails(){
let SearchVal = searchele.value;
// let SearchVal = "Jurassic"
let response = await fetch(`http://www.omdbapi.com/?s=${SearchVal}&apikey=95751bfe`);
let result = await response.json();
let brr = result.Search
// console.log(brr)

renderUi(result)
}

document.getElementById("submit").addEventListener("click",fetchDetails)

// fetchDetails()