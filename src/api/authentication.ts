// getReactNativePersistence not resolving issue fix from here.
// https://stackoverflow.com/a/77021337
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from 'firebase/auth';
// import firebase from 'firebase/compat';

const auth = getAuth();

export const login = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signup = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const retrieveSession = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export const logout = (): Promise<void> => {
  return auth.signOut();
};
