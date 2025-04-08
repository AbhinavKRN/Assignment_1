import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import WebViewComponent from './components/WebViewComponent';
import { requestUserPermission } from './firebase/config';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  useEffect(() => {
    // Request permission for notifications
    requestUserPermission();

    // Handle notifications when app is in foreground
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Notification received in foreground:', remoteMessage);
      // You can show a custom notification here
    });

    // Handle notifications when app is in background
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Notification received in background:', remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <WebViewComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
