import { initializeApp } from 'firebase/app';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyAFn-RqE_9FtibKFADE0fCU7L8BXe5VCVs",
    authDomain: "lol1234-5d0d8.firebaseapp.com",
    projectId: "lol1234-5d0d8",
    storageBucket: "lol1234-5d0d8.firebasestorage.app",
    messagingSenderId: "319023773",
    appId: "1:319023773:web:dbf7bb58bfab27b7858274",
    measurementId: "G-N1G4RMHQ99"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Request permission for notifications
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
};

// Get FCM token
const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    // You can send this token to your server
  } catch (error) {
    console.log('Error getting FCM token:', error);
  }
};

export default app;
