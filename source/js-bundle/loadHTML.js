// the majority of browsers do not support native html loading of html components
// https://webmasters.stackexchange.com/questions/127482/on-what-specific-grounds-were-html-imports-rejected-deprecated-and-removed
// https://hacks.mozilla.org/2015/06/the-state-of-web-components/
// so implement this in javascript
// thanks to stackoverflow.com/a/59249682
(() => {
    const includeEls = document.getElementsByTagName('include');
    [].forEach.call((includeEls, i) => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();