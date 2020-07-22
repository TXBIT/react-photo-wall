import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAWBabMnzuYjr0FYlk1jNWr_u4Zh2rYHLM',
  authDomain: 'photo-wall-39101.firebaseapp.com',
  databaseURL: 'https://photo-wall-39101.firebaseio.com',
  projectId: 'photo-wall-39101',
  storageBucket: 'photo-wall-39101.appspot.com',
  messagingSenderId: '996559227892',
  appId: '1:996559227892:web:490b21dd90e7beebb5c7a1',
  measurementId: 'G-M8BN74CSE3',
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
