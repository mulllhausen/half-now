import {
    GoogleAuthProvider,
    signInWithRedirect
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

//updateAuthProviderWhitelist('google.com');

export function googleSignIn(auth) {
    // https://firebase.google.com/docs/auth/web/google-signin
    if (!auth.currentUser) {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        provider.addScope('email'); // get the user's email address for linking accounts. maybe not necessary...
        signInWithRedirect(auth, provider);
    } else {
        renderUserData(auth.currentUser);
        //firebase.auth().signOut();
    }
}

export function processGoogleUserData(user) {
    const providerData = user.providerData[0];
    return {
        name: providerData.displayName,
        photoURL: providerData.photoURL,
        email: providerData.email,
        uid: providerData.uid
    };
}
