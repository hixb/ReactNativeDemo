import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import avatar from '../assets/images/avatar.jpg';
import {imageUrl} from '../constants/Url';

export default () => {
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    Image.getSize(
      imageUrl,
      (width, height) => {
        console.log('Image size loaded', `width: ${width}, height: ${height}`);
      },
      error => {
        console.log(error);
      },
    );

    Image.prefetch(imageUrl)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.root}>
      <Image source={avatar} blurRadius={5} />
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Image source={{uri: 'https://xx.x.x,jpg'}} defaultSource={avatar} />
      <Image source={avatar} fadeDuration={200} />
      <Image
        source={avatar}
        onLoad={event => {
          console.log(event.nativeEvent);
        }}
        onError={() => {
          console.log('Image failed to load');
        }}
        onLoadStart={() => {
          console.log('Image load started');
        }}
        onLoadEnd={() => {
          console.log('Image load ended');
        }}
      />
      <Image style={styles.tintImg} source={{uri: imageUrl}} />
      <Image ref={imgRef} source={avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },
  image: {
    width: 160,
    height: 50,
    resizeMode: 'center',
    backgroundColor: '#666',
  },
  tintImg: {
    width: 30,
    height: 30,
    tintColor: 'red',
  },
});
