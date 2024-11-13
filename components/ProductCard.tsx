/* eslint-disable prettier/prettier */

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ProductResponse } from '~/type';
import { trimText } from '~/utils';

type Props = {
  product: ProductResponse;
  index: number;
};

export const ProductCard = ({ index, product }: Props): JSX.Element => {
  const router = useRouter();
  const onPress = () => {
    router.push(`/product/${product.id}`);
  };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { marginLeft: index % 1 === 0 ? 10 : 0, marginBottom: 15, opacity: pressed ? 0.5 : 1 },
      ]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.images[0] }}
          placeholder={require('~/assets/gig.gif')}
          contentFit="cover"
          style={styles.image}
          placeholderContentFit="contain"
        />
      </View>
      <View style={{ gap: 10 }}>
        <Text style={styles.title}>{trimText(product.title)}</Text>
        <Text>{product.category}</Text>
        <Text>${product.price}</Text>
      </View>
    </Pressable>
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
    minHeight: 320,
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
