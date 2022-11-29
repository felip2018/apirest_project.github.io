const root = document.getElementById("root");

const renderCharacters = (characters) => {
    console.log("RENDER > ", characters);
    root.innerHTML = '';
    if (characters) {
        let content = '';
        characters.results.forEach(element => {
            // root.appendChild(`<p>${element.name}</p>`)
            content += `<div class="col-xs-12 col-md-3">
                <img class="characterImg" src="${element.image}"/>
                <p>${element.name}</p>
            </div>`;
        });
        root.innerHTML = content;
    } else {
        root.innerHTML = `<div class="alert alert-danger">Ocurrió un error al consultar los personajes!</div>`
    }
}

const renderLocations = (locations) => {
    console.log("RENDER > ", locations);
    root.innerHTML = '';
    if (locations) {
        let content = `<table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Dimensión</th>
                                </tr>
                            </thead>
                            <tbody>`;
        locations.results.forEach(element => {
            content += `<tr>
                            <td>${element.name}</td>
                            <td>${element.type}</td>
                            <td>${element.dimension}</td>
                        </tr>`;
        });
        content += '</tbody></table>';
        root.innerHTML = content;
    } else {
        root.innerHTML = `<div class="alert alert-danger">Ocurrió un error al consultar los lugares!</div>`
    }
}

const renderEpisodes = (episodes) => {
    console.log("RENDER > ", episodes);
    root.innerHTML = '';
    if (episodes) {
        let content = `<table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Episodio</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>`;
        episodes.results.forEach(element => {
            content += `<tr>
                            <td>${element.name}</td>
                            <td>${element.episode}</td>
                            <td>${element.air_date}</td>
                        </tr>`;
        });
        content += '</tbody></table>';
        root.innerHTML = content;
    } else {
        root.innerHTML = `<div class="alert alert-danger">Ocurrió un error al consultar los episodios!</div>`
    }
}

const renderLoader = () => {
    root.innerHTML = `<div id="loader">
        <img src="./view/img/loader.gif" alt="loader">
    </div>`;
}

export {
    renderCharacters,
    renderLocations,
    renderEpisodes,
    renderLoader
};