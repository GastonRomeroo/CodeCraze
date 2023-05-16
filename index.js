
let contenedor = document.getElementById("main-container");

//dataJson() WARNING SE CREA UN BUCLE INFINITO

function dataJson() {
    fetch('./data/dataDevs.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            renderDevs(data)
        });

}


// function renderDevs(devs) {
//     contenedor.innerHTML = "";
//     devs.forEach(item => {
//         let div = document.createElement('div');
//         div.className = 'div-container';
//         let { name, title, hability, img, skills } = item;
//         div.innerHTML = 
//         `<div class="card-dev">    
//             <card class="card">
//                 <picture class="picture-dev">
//                     <img class="img-dev" src=${img}>
//                 </picture>
//                 <div class="info-dev">
//                     <h2>${name}</h2>
//                     <p>${title}</p>
//                     <p>${hability}</p>
//                     <p>${skills}<p>
//                 </div>
//             </card>
//         </div>`

//     contenedor.appendChild(div);
//     dataJson();
//     });
// }

function renderDevs(devs) {

    devs.forEach(devs => {
        //body card
        let cardBody = document.createElement('div');
        cardBody.classList.add('card')
        //img card
        let imgCard = document.createElement('img');
        imgCard.src = devs.img;
        imgCard.alt = devs.name;
        imgCard.classList.add('img-dev')
        //info devs
        let infoDevs = document.createElement('div');
        infoDevs.classList.add('info-devs');
        // name devs
        let nameDevs = document.createElement('h2');
        nameDevs.textContent = devs.name;


        cardBody.appendChild(imgCard)
        cardBody.appendChild(infoDevs)
        infoDevs.appendChild(nameDevs)
        contenedor.appendChild(cardBody);
        dataJson();
    });
}


// // MODAL
// let openBtn = document.getElementById("open-btn");
// let modalContainer = document.getElementById("modal-container");
// let closeBtn = document.getElementById("close-btn");

// // Event listeners
//  openBtn.addEventListener("click", () => {
//     modalContainer.style.display = 'block'
//  })

//  close.addEventListener("click", () => {
//     modalContainer.style.display = 'none'
//  })

//  window.addEventListener( "click", (e)=> {
//     if (e.target === modalContainer){
//         modalContainer.style.display = "none"
//     }
//  })