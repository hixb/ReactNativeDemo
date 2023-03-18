import React from 'react';
import {View, Text} from 'react-native';
import InfoCard from './InfoCard';

export default () => {
  const getLevelView = () => <Text style={{color: 'red'}}>{'level: 3'}</Text>;

  const getChildrenView = () => (
    <Text style={{color: 'blue'}}>{'children'}</Text>
  );

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#f5f5f5'}}>
      <InfoCard name="John" age={20} levelView={getLevelView()}>
        {getChildrenView()}
      </InfoCard>
    </View>
  );
};
