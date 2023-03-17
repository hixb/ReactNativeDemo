import React from 'react';
import {View, Text} from 'react-native';

class ClassView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: 'Hanoi',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        address: 'HCM',
      });
    }, 2000);
  }

  render() {
    const {name, age, level} = this.props;
    const {address} = this.state;

    return (
      <View style={{width: '100%', height: 200, backgroundColor: '#666'}}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
          }}>
          {`Name: ${name}, Age: ${age}, Level: ${level}`}
        </Text>
        <Text>{address}</Text>
      </View>
    );
  }
}

export default ClassView;
