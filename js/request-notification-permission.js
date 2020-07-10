const permission = () => {
    const urlBase64ToUint8Array = base64String => {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    const requestPermission = () => {
        Notification.requestPermission().then(function(result) {
            if (result === "denied") {
                console.log("Notification access denied");
                return;
            } else if (result === "default") {
                console.error("The user was closing the request permission dialog box");
                return;
            }
            
            navigator.serviceWorker.ready.then(() => {
                if (('PushManager' in window)) {
                    navigator.serviceWorker.getRegistration().then(function(registration) {
                        registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlBase64ToUint8Array("BLGoJK-CFXaokmWXOKUu0Bu9vSiMEgQE5EB-tQbPCQlnP8Kby6Q0WCA3u8d7sa6evjMRTk0Hyw_eJ2biPx5Rehc")
                        }).then(function(subscribe) {
                            console.log('Subscribed successfully with endpoint: ', subscribe.endpoint);
                            console.log('Subscribed successfully with p256dh key: ', btoa(String.fromCharCode.apply(
                                null, new Uint8Array(subscribe.getKey('p256dh')))));
                            console.log('Subscribed successfully with auth key: ', btoa(String.fromCharCode.apply(
                                null, new Uint8Array(subscribe.getKey('auth')))));
                        }).catch(function(e) {
                            console.error('Could not successfully subscribed', e.message);
                        });
                    });
                }
            })
        });
    }

    if ('Notification' in window) {
        requestPermission();
    } else {
        console.error("This browser isn't supporting notification");
    }
}

export default permission;