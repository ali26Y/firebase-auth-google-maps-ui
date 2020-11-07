import firebase from 'firebase';
import './config';

export const signIn = async (user, pass, setErrors, addToken) => {
    firebase.auth().signInWithEmailAndPassword(user, pass) 
    .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b
        localStorage.setItem('token', token);
        addToken(token);
    })
    .catch(err => {
        setErrors(err.message)
    })
};

export const signUp = async (user, pass, setErrors, addToken) => {
    firebase.auth().createUserWithEmailAndPassword(user, pass) 
    .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b
        localStorage.setItem('token', token);
        addToken(token);
    })
    .catch(err => {
        setErrors(err.message)
    })
};

export const signOut = async (setErrors, addToken) => {
    firebase.auth().signOut().then(async res => {
        localStorage.removeItem('token');
        addToken(null);
    }).catch(err => {
        setErrors(err.message)
        localStorage.removeItem('token')
        addToken(null)
      })
};
