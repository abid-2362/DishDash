// getReactNativePersistence not resolving issue fix from here.
// https://stackoverflow.com/a/77021337
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
// import firebase from 'firebase/compat';

const auth = getAuth();

export const login = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};
