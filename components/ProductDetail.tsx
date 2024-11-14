/* eslint-disable prettier/prettier */

import { Image } from 'expo-image';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Divider } from './Divider';
import { ProductInfo } from './ProductDecription';
import { ProductReviews } from './ProductReviews';

import { ProductResponse } from '~/type';

type Props = {
  product: ProductResponse;
};

const { height } = Dimensions.get('window');
export const ProductDetail = ({ product }: Props): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} contentFit="contain" source={{ uri: product.images[0] }} />
      </View>
      <Divider />
      {/* product into */}
      <ProductInfo
        brand={product.brand}
        category={product.category}
        description={product.description}
        discountPercentage={product.discountPercentage}
        price={product.price}
        rating={product.rating}
        stock={product.stock}
        title={product.title}
        numberOfReviews={product.reviews.length}
      />
      {/* product ratings and reviews */}
      <Divider />
      <ProductReviews reviews={product.reviews} rating={product.rating} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
