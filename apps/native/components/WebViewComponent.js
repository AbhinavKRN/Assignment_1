import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'http://192.168.1.100:3000' }} // Replace with your local IP or hosted Next.js URL
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewComponent;
