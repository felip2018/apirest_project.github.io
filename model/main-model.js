const BASE_PATH = "https://rickandmortyapi.com/api";

export const getCharacters = async () => {
    try {
        let characters = await (await fetch(`${BASE_PATH}/character`, {method: 'GET'})).json();
        return characters;
    } catch (error) {
        return null;
    }
}

export const getLocations = async () => {
    try {
        let locations = await (await fetch(`${BASE_PATH}/location`, {method: 'GET'})).json();
        return locations;
    } catch (error) {
        return null;
    }
}

export const getEpisodes = async () => {
    try {
        let episodes = await fetch(`${BASE_PATH}/episode`, {method: 'GET'});
        return episodes.json();
    } catch (error) {
        return null;
    }
}