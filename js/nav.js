const navigation = $(document).ready(function () {
    //Loading sidebar nav
    var elems = document.querySelector(".sidenav");
    M.Sidenav.init(elems);
    navLoader();

    function navLoader() {
        $.ajax({
            method: "GET",
            url: "/pages/nav.html",
            success: function (response) {
                document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
                    elm.innerHTML = response;
                });

                document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
                    $(elm).click(function(event) {
                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();
                    });
                });
            }
        });
    }

    //Loading page content
    var thePage = window.location.hash.substr(1);
    if (thePage === "") thePage = "home";
    loadPage(thePage);
    
    function loadPage(page) {
        $.ajax({
            type: "GET",
            url: `pages/${page}.html`,
        })
          .done(function (html) {
              $("#body-content").html(html);
          })
          .fail(function (jqXHR, textStatus) {
              $("#body-content").html("<p>Request failed: " + textStatus + "</p>")
          });
    }
});

export default navigation;