import navigation from '/js/nav.js';
import { saveTeam } from '/js/db.js';
import registerSW from '/js/register-service-worker.js';
import { getStandings, getAllTeams, getTeamDetails, getSavedTeams, getSavedTeamById } from '/js/api.js';
import permission from '/js/request-notification-permission.js';

registerSW();
permission();

$(document).ready(function() {
    var field = 'saved';
    var url = window.location.href;
    if (url.indexOf('&' + field + '=') != -1) {
        var urlParams = new URLSearchParams(window.location.search);
        var isFromSaved = urlParams.get("saved");

        var btnSave = document.getElementById("save");
        if (isFromSaved) {
            // Hide fab jika dimuat dari indexed db
            btnSave.style.display = 'none';
            
            // ambil artikel lalu tampilkan
            getSavedTeamById();
        }
    } else {
        var item = getTeamDetails();

        if ($('#save').length) {
            var save = document.getElementById("save");
            save.onclick = function () {
                M.toast({html: 'The team is saved for offline!'})
                item.then(function (teamDetail) {
                    saveTeam(teamDetail);
                });
            }
        }
    }

    getStandings();
    getAllTeams();
    getSavedTeams();
});