// hello! 

chrome.app.runtime.onLaunched.addListener(function(launchData) {
    console.log('onLaunched with launchdata',launchData)
    if (launchData.items) {
        console.log('launched with items',launchData.items)
    }

    // race conditions with initalizing etc etc...

    chrome.app.window.create('euphony/debug.html',
                             {id:'euphony'},
                             function(window) {
                                 console.log('euphony window callback',window)
                             })
})