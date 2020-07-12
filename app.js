import navigation from '/js/nav.js';
import { saveTeam, deleteTeam } from '/js/db.js';
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
        var btnDelete = document.getElementById("delete");

        if ($('#all-details').length) {
            btnDelete.style.display = 'none';
        }

        if ($('#save').length) {
            var save = document.getElementById("save");
            save.onclick = function () {
                M.toast({html: 'The team is saved for offline!'})
                item.then(function (teamDetail) {
                    saveTeam(teamDetail);
                });
                $('#save').fadeOut();
            }
        }
    }

    if ($('#delete').length) {
        var urlParams = new URLSearchParams(window.location.search);
        var getTheId = urlParams.get("id");
        var numberify = Number(getTheId);

        var del = document.getElementById("delete");
        del.onclick = function() {  
            deleteTeam(numberify);
            M.toast({html: 'The team is deleted from offline service!'});
            $('#delete').fadeOut();
        }
    }

    getStandings();
    getAllTeams();
    getSavedTeams();
});