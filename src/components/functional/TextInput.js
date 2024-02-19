// Component takes two props for placeholder text and icon
// Usage:
// <TextInputComponent iconName={"search"} placeholder={"This is a placeholder!"} />

import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TextInputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // inital text value, leave blank to use placeholder
      inputValue: '',
    };
  }

  handleInputChange = (text) => {
    this.setState({ inputValue: text });
  };

  render() {
    const { iconName, placeholder } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {iconName && <Icon name={iconName} style={styles.icon} />}
          <TextInput
            style={[styles.input, iconName && { paddingLeft: 5 }]}
            placeholder={placeholder}
            onChangeText={this.handleInputChange}
            value={this.state.inputValue}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
  },
  icon: {
    fontSize: 20,
    marginRight: 5,
  },
});

export default TextInputComponent;
