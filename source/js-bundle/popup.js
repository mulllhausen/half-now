// popups don't need to appear for SEO or immediately upon load,
// so load this file asynchronously

function fullPagePopup(heading, bodyTemplate, buttonsJson, callback) {
    document.getElementById('fullpagePopupHeading').innerHTML = heading;
    document.getElementById('fullpagePopupDetail').innerHTML = detail;
    document.getElementById('fullpagePopupNotification').style.display = 'table';
    callback();
}

function hidePopup() {
    document.getElementById('fullpagePopupNotification').style.display = 'none';
}
