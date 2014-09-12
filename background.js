// hello! 

chrome.app.runtime.onLaunched.addListener(function(launchData) {
    console.log('onLaunched with launchdata',launchData)
    if (launchData.items) {
        console.log('launched with items',launchData.items)
    }
})