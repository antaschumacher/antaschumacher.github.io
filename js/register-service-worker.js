const registerSW = () => {
    if ("serviceWorker" in navigator) {
        $(window).on("load", function() {
            navigator.serviceWorker
              .register("/service-worker.js")
              .then(function() {
                  console.log("Service Worker application success!");
              })
              .catch(function() {
                  console.log("Service Worker application failed!");
              })
        })
    } else {
        console.log("Service Worker isn't supported in this browser");
    }
}

export default registerSW;