
import { renderCharacters, renderLocations, renderEpisodes, renderLoader } from "../view/handler-view.js";
import { getCharacters, getLocations, getEpisodes } from "../model/main-model.js";

const btnCharacters = document.getElementById("btnCharacters");
const btnLocations = document.getElementById("btnLocations");
const btnEpisodes = document.getElementById("btnEpisodes");

btnCharacters.addEventListener("click", async () => {
    renderLoader();
    let characters = await getCharacters();
    renderCharacters(characters);
});

btnLocations.addEventListener("click", async () => {
    renderLoader();
    let locations = await getLocations();
    renderLocations(locations);
});

btnEpisodes.addEventListener("click", async () => {
    renderLoader();
    let episodes = await getEpisodes();
    renderEpisodes(episodes);
});