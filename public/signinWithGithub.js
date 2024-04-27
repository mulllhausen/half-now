import {
    GithubAuthProvider
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

//updateAuthProviderWhitelist('github.com');

export function githubSignIn() {
    // https://firebase.google.com/docs/auth/web/facebook-login
    //if (!auth.currentUser) {
        const provider = new GithubAuthProvider();
        signInWithRedirect(auth, provider);
    //} else {
    //    renderUserData(auth.currentUser);
        //firebase.auth().signOut();
    //}
}

export function processGithubUserData(user) {
    const providerData = user.providerData[0];
    return {
        name: providerData.displayName,
        photoURL: providerData.photoURL,
        email: providerData.email,
        uid: providerData.uid
    };
}
