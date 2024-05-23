// startup(document, window, appSettings, (doc, win, appSettings) => {
//     doc.querySelector('#login').addEventListener('click', loginButtonClicked);
// });
// function registerServiceProvidersEvents() {
//     serviceProviders.array.forEach(item => {
//         d.querySelector(`${item.id}`).addEventListener('click', loginServiceProviderClicked);
//     });
// }
document.querySelector('#login').addEventListener('click', loginButtonClicked);

function loginButtonClicked(e) {
    window.location.href = 'login.html';
    // show the popup
    //fullPagePopup('Login', '#login', registerServiceProvidersEvents);
    // cancel button hides popup
}

// function loginServiceProviderClicked(e) {
//     const el = e.srcElement;

// }