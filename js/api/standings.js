const base_standings_url = "https://api.football-data.org/v2/competitions/PL/standings";

const status = response => {
    if (response.status != 200) {
        console.log(response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

const json = response => {
    return response.json();
}

const error = error => {
    console.log(error);
}

export { base_standings_url, status, json, error };