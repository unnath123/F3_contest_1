const Api_key = "95751bfe";
let searchele = document.getElementById("searchVal");

function renderUi(array) {
  const mainContainer = document.getElementById("m-cont");
  // console.log(array.Search[0])
  for (let i = 0; i < 10; i++) {
    const divEle = document.createElement("div");
    divEle.className = "item1";
    divEle.innerHTML = `
                <div class="image1"><img src=${array.Search[i].Poster} alt="poster"></div>
                <div class="number"><h1 class="num">${i}</h1></div>
                <div class="title">${array.Search[i].Title}</div>`;

    mainContainer.appendChild(divEle);
  }
}


function renderLoader(){
    const m_container = document.getElementById("m-cont");
    const progress = document.createElement("div");
    progress.className = "progress";
    progress.innerHTML = `
    <div class="color"></div>`

    m_container.appendChild(progress)
}

function removeLoader(){
    const progress = document.querySelector(".progress");
    progress.remove();
}


async function fetchDetails() {
  //let SearchVal = searchele.value;
   let SearchVal = "Jurassic"

    renderLoader()

    let response = await fetch(
    `http://www.omdbapi.com/?s=${SearchVal}&apikey=95751bfe`
  );

  let result = await response.json();

  removeLoader()

//   let brr = result.Search;
  console.log(result);

   renderUi(result)
}

 document.getElementById("submit").addEventListener("click", fetchDetails);

//fetchDetails();
