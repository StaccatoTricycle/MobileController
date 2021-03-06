const React = require('react-native');

const {
  StyleSheet,
  Dimensions,
  View,
} = React;  

// On the iPhone 6+, if the app is launched in landscape, Dimensions.get('window').width returns the height and vice versa for width so we fix that here
var windowWidth, windowHeight;
if (Dimensions.get('window').width===736) { // iPhone 6+ landscape
  windowWidth = 414;
  windowHeight = 736;
} else if(Dimensions.get('window').width===667) { // iPhone 6 landscape
  windowWidth = 375;
  windowHeight = 667;
} else if(Dimensions.get('window').width===568) { // iPhone 5 landscape
  windowWidth = 320;
  windowHeight = 568;
} else { // launched in correct orientation
  windowWidth = Dimensions.get('window').width;
  windowHeight = Dimensions.get('window').height;
}


// This presentational component renders the slightly dark overlays that cover the whole screen except for the focus area
// Other camera components are rendered inside of it
class DarkOverlays extends React.Component { 
  render() {
    return (
      <View style={styles.overlayContainer} pointerEvents='box-none'>
        <View style={styles.overlayLeft}/> 
        <View style={styles.overlayTop}/> 
        <View style={styles.overlayRight}/> 
        <View style={styles.overlayBottom}/> 
        {this.props.children}
      </View>
    );
  }
}

module.exports = DarkOverlays;

const styles = StyleSheet.create({
  overlayContainer: {
    height: windowHeight,
    width: windowWidth,
    position: 'relative'
  },
  overlayTop: {
    height: windowHeight * 0.25,
    width: windowWidth,
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  overlayRight: {
    height: windowWidth * 2/3,
    width: windowWidth - 311/375 * windowWidth,
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'absolute',
    right: 0,
    top: windowHeight * 0.25,
  },
  overlayLeft: {
    height: windowWidth * 2/3,
    width: windowWidth - 311/375 * windowWidth,
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'absolute',
    left: 0,
    top: windowHeight * 0.25
  },
  overlayBottom: {
    height: windowHeight - windowHeight * 0.25 - windowWidth * 2/3,
    width: windowWidth,
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});