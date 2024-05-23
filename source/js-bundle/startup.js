function startup(doc, win, appSettings, pageStartup, pageSettings) {
    // registrations common to every page
    registerLogin(doc, win, appSettings);

    if (pageStartup != null) {
        pageStartup(doc, win, appSettings, pageSettings);
    }
}