import {
    FacebookAuthProvider
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

//updateAuthProviderWhitelist('facebook.com');

export function facebookSignIn() {
    // https://firebase.google.com/docs/auth/web/facebook-login
    //if (!auth.currentUser) {
        const provider = new FacebookAuthProvider();
        provider.addScope('email'); // get the user's email address for linking accounts. maybe not necessary...
        signInWithRedirect(auth, provider);
    //} else {
    //    renderUserData(auth.currentUser);
        //firebase.auth().signOut();
    //}
}

export function processFacebookUserData(user) {
    function getData() {
        return null; // not implemented yet
        // need to get the facebook profile picture using the facebook api:
        // https://developers.facebook.com/tools/explorer/xxxxxxxxxxxxxxxx/?method=GET&path=xxxxxxxxxxxxxxxxx%2Fpicture&version=v16.0
        FB.api(
          '/10160277305828536/picture',
          'GET',
          {},
          function(response) {
              // Insert your code here
          }
        );
    }
    return {
        getData: getData
    };
}

