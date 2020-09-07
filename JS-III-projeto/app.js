fetch('https://api.thecatapi.com/v1/images/search?category_ids=4&limit=10')
    .then(function (resultado) {
        return resultado.json();
    })
    .then(function (cats) {
        let imagens = document.getElementById('imagens');
        console.log(cats);

        cats.forEach(function (cat) {
            let div = document.createElement('div');
            let img = document.createElement('img');

            div.style.magin = "30px";

            img.src = cat.url;
            img.width = 400;

            div.appendChild(img);
            imagens.appendChild(div);

        });
    });


// AJAX FETCH - POST

let data = {
        image_id: "bi",
        value: ''
};

// GET
let settings = {
    method: "POST",
    headers: {
        // Mime types
        "Content-Type": "application/json",
        "x-api-key": "c1080ee4-7372-4ddd-997e-7976b4c98590"
    },
    body: JSON.stringify(data)
};

fetch('https://api.thecatapi.com/v1/votes', settings)
    .then(function (response) {
        return response.json();
    })
    .then(function (info) {
        console.log(info);
    }).catch(function (error) {
        console.log(error);
    });