/* eslint-disable prettier/prettier */

import { Image, StyleSheet, Text, View } from 'react-native';

import { ProductResponse } from '~/type';

type Props = {
  product: ProductResponse;
  index: number;
};

export const ProductCard = ({ index, product }: Props): JSX.Element => {
  return (
    <View style={[styles.card, { marginLeft: index % 1 === 0 ? 10 : 0, marginBottom: 15 }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.images[0] }} resizeMode="cover" style={styles.image} />
      </View>
      <View style={{ gap: 10 }}>
        <Text style={styles.title}>{product.title}</Text>
        <Text>{product.category}</Text>
        <Text>${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flex: 1,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    borderRadius: 5,
    height: 320,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
});
