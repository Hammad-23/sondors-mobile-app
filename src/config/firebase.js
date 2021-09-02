import auth, {firebase} from '@react-native-firebase/auth';
console.log('firebase--> ', firebase);

function register(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export {register,signIn};
