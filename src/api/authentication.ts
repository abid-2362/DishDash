// getReactNativePersistence not resolving issue fix from here.
// https://stackoverflow.com/a/77021337
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'; // import firebase from 'firebase/compat';
// import firebase from 'firebase/compat';

const auth = getAuth();

export const login = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => resolve(user.user))
      .catch(err => reject(err));
  });
};

export const signup = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => resolve(user.user))
      .catch(err => reject(err));
  });
};

export const retrieveSession = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export const logout = (): Promise<void> => {
  return auth.signOut();
};
