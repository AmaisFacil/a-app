import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import { CarouselContainer, BannerImage } from './styles';

const { width } = Dimensions.get('window');

const BannerCarousel = ({ banners }) => {
  const renderItem = ({ item }) => (
    <BannerImage
      source={{ uri: item }}
    />
  );

  return (
    <CarouselContainer>
      <Carousel
        data={banners}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.9}
        autoplayDelay={3000}
        autoplayInterval={5000}
        autoplay
        loop
      />
    </CarouselContainer>
  );
};

export default BannerCarousel;
