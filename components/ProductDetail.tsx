/* eslint-disable prettier/prettier */

import { Image } from 'expo-image';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import { Divider } from './Divider';
import { ProductInfo } from './ProductDecription';
import { ProductReviews } from './ProductReviews';
import { SimilarProducts } from './SimiliarProducts';

import { ProductResponse } from '~/type';

type Props = {
  product: ProductResponse;
  similar: ProductResponse[];
};

const { height } = Dimensions.get('window');
export const ProductDetail = ({ product, similar }: Props): JSX.Element => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListHeaderComponent={() => (
        <View style={{ flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              contentFit="contain"
              source={{ uri: product.images[0] }}
              placeholder={require('~/assets/gig.gif')}
              placeholderContentFit="contain"
            />
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
      )}
      data={[]}
      renderItem={() => null}
      ListFooterComponent={() => <SimilarProducts product={similar} />}
    />
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
