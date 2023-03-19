import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import bg_card from '../assets/images/bg_card.png';
import icon_bank from '../assets/images/icon_bank.png';

export default () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={bg_card}
        style={styles.viewStyle}
        imageStyle={styles.imgStyle}>
        <Image source={icon_bank} style={styles.logo} />
        <View style={styles.rightDescription}>
          <Text style={[styles.title, styles.textWhite]}>招商银行</Text>
          <Text style={[styles.cardName, styles.textWhite]}>储蓄卡</Text>
          <Text style={[styles.no, styles.textWhite]}>•••• •••• •••• 3068</Text>
        </View>
      </ImageBackground>
      <View style={styles.addCard}>
        <Text style={styles.addCardText}>+添加银行卡</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },
  viewStyle: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    paddingTop: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  imgStyle: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  rightDescription: {
    marginLeft: 10,
  },
  textWhite: {
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardName: {
    opacity: 0.3,
  },
  no: {
    fontSize: 30,
    marginTop: 10,
  },
  addCard: {
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 90,
    paddingLeft: 30,
  },
  addCardText: {
    fontSize: 18,
  },
});
