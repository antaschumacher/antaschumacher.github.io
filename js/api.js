import { base_standings_url, status, json, error } from "/js/api/standings.js";
import base_teams_url from "/js/api/teams.js";
import base_team_details_url from "/js/api/team-details.js";
import { getAll, getById } from "/js/db.js";

const fetchAPI = url => {
    return fetch(url, {
        'headers': {
            'X-Auth-Token': 'df0658daa02a4fbe92503d23c57b4ab6'
        },
        'mode': 'cors'
    })
}

const getStandings = () => {
    if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
        if ('caches' in window) {
            caches.match(base_standings_url).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        if ($('#standings').length) {
                            let standingsPerTeam = "";
                            data.standings[0].table.forEach(function(teams) {
                                standingsPerTeam += `
                                    <div class="card">
                                        <div class="card-content">
                                            <p><span id="number">${teams.position}</span> <img src="${teams.team.crestUrl}" height="25" width="25"> <span id="teamname">${teams.team.name}</span> <span id="games">${teams.playedGames}</span> <span id="won">${teams.won}</span> <span id="draw">${teams.draw}</span> <span id="lost">${teams.lost}</span> <span id="point">${teams.points}<span></p>
                                        </div>
                                    </div>
                                `;
                            });
                            document.getElementById('standings').innerHTML = standingsPerTeam;
                        }
                    })
                }
            })
        }

        setTimeout(function() {
            if (navigator.onLine) {
                let loader = `
                    <style>
                        .loader {
                            background-image: url('/img/loader.gif');
                            height: 150px;
                            width: 100%;
                            background-position: center;
                            background-repeat: no-repeat;
                            margin-top: 50px;
                        }
                    </style>
                    <div class="loader"></div>
                    `;
                document.getElementById('standings').innerHTML = loader;
            }

            fetchAPI(base_standings_url)
                .then(status)
                .then(json)
                .then(function (data) { 
                    if ($('#standings').length) {
                        let standingsPerTeam = "";
                        data.standings[0].table.forEach(function(teams) {
                            standingsPerTeam += `
                                <div class="card">
                                    <div class="card-content">
                                        <p><span id="number">${teams.position}</span> <img src="${teams.team.crestUrl}" height="25" width="25"> <span id="teamname">${teams.team.name}</span> <span id="games">${teams.playedGames}</span> <span id="won">${teams.won}</span> <span id="draw">${teams.draw}</span> <span id="lost">${teams.lost}</span> <span id="point">${teams.points}<span></p>
                                    </div>
                                </div>
                            `;
                        });
                        document.getElementById('standings').innerHTML = standingsPerTeam;
                    }
                })
                .catch(error)
        }, 1000)
    }
}

const getAllTeams = () => {
    if (window.location.pathname == "/teams.html") {
        let loader = `
        <style>
            .loader {
                background-image: url('/img/loader.gif');
                height: 150px;
                width: 100%;
                background-position: center;
                background-repeat: no-repeat;
                margin-top: 50px;
            }
        </style>
        <div class="loader"></div>
        `;
        document.getElementById('team-list').innerHTML = loader;

        if ('caches' in window) {
            caches.match(base_teams_url).then(function(response) {  
                if (response) {
                    response.json().then(function(data) {
                        if ($("#team-list").length) {
                            let allTeams = '';
                            data.teams.forEach(function(team) {
                                allTeams += `
                                    <div class="col s12 m4" >
                                        <div class="card">
                                            <div class="card-image">
                                                <a href="/team-details.html?id=${team.id}">
                                                    <img src="${team.crestUrl}" height="250" width="100">
                                                </a>
                                            </div>
                                            <div class="card-content center-align">
                                                <span class="card-title" style="height: 100px;">${team.name}</span>
                                            </div>
                                            <div class="card-action">
                                                <a href="${team.website}" target="_blank" class="teal-text text-accent-3" style="font-weight: bolder;">Official Website</a>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            });
                            document.getElementById('team-list').innerHTML = allTeams;
                        }
                    })
                }
            })
        }

        fetchAPI(base_teams_url)
            .then(status)
            .then(json)
            .then(function(data) {
                if ($("#team-list").length) {
                    let allTeams = '';
                    data.teams.forEach(function(team) {
                        allTeams += `
                            <div class="col s12 m4" >
                                <div class="card">
                                    <div class="card-image">
                                        <a href="/team-details.html?id=${team.id}">
                                            <img src="${team.crestUrl}" height="250" width="100">
                                        </a>
                                    </div>
                                    <div class="card-content center-align">
                                        <span class="card-title" style="height: 100px;">${team.name}</span>
                                    </div>
                                    <div class="card-action">
                                        <a href="${team.website}" target="_blank" class="teal-text text-accent-3" style="font-weight: bolder;">Official Website</a>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    document.getElementById('team-list').innerHTML = allTeams;
                }
            })
            .catch(error);
    }
}

const getTeamDetails = () => {
    return new Promise(function(resolve, reject) {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");

        if (idParam != null) {
            if ("caches" in window) {
                caches.match(base_team_details_url + idParam).then(function(response) {
                    if (response) {
                        response.json().then(function(data) {
                            if ($('#all-details').length) {
                                let theTeamDetail = `
                                    <div class="row">
                                        <div class="col s12">
                                            <div class="card">
                                                <div class="card-image" style="padding-top: 30px;">
                                                    <img src="${data.crestUrl}" height="150" width="100" style="margin-top: 15px;">
                                                </div>
                                                <div class="card-content center-align">
                                                    <h3 style="font-weight: bolder;">${data.name}</h3>
                                                    <table border="0">
                                                        <tr>
                                                            <th>Founded: </th>
                                                            <td>${data.founded}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Venue: </th>
                                                            <td>${data.venue}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Address: </th>
                                                            <td>${data.address}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                
                                document.getElementById('all-details').innerHTML = theTeamDetail;
    
                                resolve(data);
                            }
                        })
                    }
                })
            }

            if (navigator.onLine) {
                let loader = `
                <style>
                    .loader {
                        background-image: url('/img/loader.gif');
                        height: 150px;
                        width: 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        margin-top: 50px;
                    }
                </style>
                <div class="loader"></div>
                `;
                document.getElementById('all-details').innerHTML = loader;
            }

            setTimeout(function() {
                fetchAPI(base_team_details_url + idParam)
                    .then(status)
                    .then(json)
                    .then(function(data) {
                        if ($('#all-details').length) {
                            let theTeamDetail = `
                                <div class="row">
                                    <div class="col s12">
                                        <div class="card">
                                            <div class="card-image" style="padding-top: 30px;">
                                                <img src="${data.crestUrl}" height="150" width="100" style="margin-top: 15px;">
                                            </div>
                                            <div class="card-content center-align">
                                                <h3 style="font-weight: bolder;">${data.name}</h3>
                                                <table border="0">
                                                    <tr>
                                                        <th>Founded: </th>
                                                        <td>${data.founded}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Venue: </th>
                                                        <td>${data.venue}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Address: </th>
                                                        <td>${data.address}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
            
                            document.getElementById('all-details').innerHTML = theTeamDetail;

                            resolve(data);
                        }
                    })
                    .catch(error);
            }, 2000);   
        }
    })
}

const getSavedTeams = () => {
    if ($('#teams-offline').length) {
        getAll().then(function(teams) {
            console.log(teams);
            // Menyusun komponen card artikel secara dinamis
            var teamSaved = "";
            teams.forEach(function(team) {
              teamSaved += `
                            <div class="col s12 m4">
                                <div class="card">
                                    <div class="card-image">
                                        <a href="/team-details.html?id=${team.id}&saved=true">
                                            <img src="${team.crestUrl}" height="250" width="100">
                                        </a>
                                    </div>
                                    <div class="card-content center-align">
                                        <span class="card-title" style="height: 100px;">${team.name}</span>
                                    </div>
                                    <div class="card-action">
                                        <a href="${team.website}" target="_blank" class="teal-text text-accent-3" style="font-weight: bolder;">Official Website</a>
                                    </div>
                                </div>
                            </div>
                        `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #body-content
            document.getElementById("teams-offline").innerHTML = teamSaved;
        });
    }
}

const getSavedTeamById = () => {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");
    var idParamToNumber = Number(idParam);

    getById(idParamToNumber).then(function(team) {
        var teamDetails = '';
        teamDetails = `
            <div class="row">
                <div class="col s12">
                    <div class="card">
                        <div class="card-image" style="padding-top: 30px;">
                            <img src="${team.crestUrl}" height="150" width="100" style="margin-top: 15px;">
                        </div>
                        <div class="card-content center-align">
                            <h3 style="font-weight: bolder;">${team.name}</h3>
                            <table border="0">
                                <tr>
                                    <th>Founded: </th>
                                    <td>${team.founded}</td>
                                </tr>
                                <tr>
                                    <th>Venue: </th>
                                    <td>${team.venue}</td>
                                </tr>
                                <tr>
                                    <th>Address: </th>
                                    <td>${team.address}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("all-details").innerHTML = teamDetails;
        });
}

export { getStandings, getAllTeams, getTeamDetails, getSavedTeams, getSavedTeamById };