

let contenedor = document.getElementById("main-container");

dataJson() //WARNING SE CREA UN BUCLE INFINITO

function dataJson() {
    fetch('./data/dataDevs.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            renderDevs(data)
        });

}

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
        nameDevs.textContent = devs.alias;


        cardBody.appendChild(imgCard)
        cardBody.appendChild(infoDevs)
        infoDevs.appendChild(nameDevs)
        contenedor.appendChild(cardBody);
    });
}

