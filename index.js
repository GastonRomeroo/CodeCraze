
let contenedor = document.getElementById("main-container");

dataJson();

function dataJson () {
    fetch('./data/dataDevs.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderDevs(data)
    })
}


function renderDevs(devs) {
    contenedor.innerHTML = "";
    devs.forEach(item => {
        let div = document.createElement('div');
        div.className = 'div-container';
        let { name, title, hability, img, skills } = item;
        div.innerHTML = 
        `<div class="card-dev">    
            <card class="card">
                <picture class="picture-dev">
                    <img class="img-dev" src=${img}>
                </picture>
                <div class="info-dev">
                    <h2>${name}</h2>
                    <p>${title}</p>
                    <p>${hability}</p>
                    <p>${skills}<p>
                </div>
            </card>
        </div>`
            
    contenedor.appendChild(div);
    dataJson();
    });
}