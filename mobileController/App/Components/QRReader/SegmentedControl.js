const React = require('react-native');

const {
  StyleSheet,
  Dimensions,
  View,
  SegmentedControlIOS,
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


// This presentational component renders the brackets in the center of the camera
class SegmentedControl extends React.Component { 
  render() {
    return (
      <SegmentedControlIOS 
        values={['Scan QR', 'Instructions']} 
        selectedIndex={this.props.selectedIndex} 
        style={styles.segments} 
        tintColor="white"
        onChange={this.props._onChange.bind(this)}
        />
    );
  }
}

module.exports = SegmentedControl;

const styles = StyleSheet.create({
  segments: {
    marginTop: 25
  },
});