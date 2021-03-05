import React, {useRef} from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import * as Color from "../../../Utilities/Constants/ColorConstant";
const CarouselCards = (props) => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
      <View>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={props.data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH + 80 }
          itemWidth={SLIDER_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          height = {50}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: Color.WHITE
          }}
          containerStyle = {{position : 'absolute', alignSelf : 'center', bottom : -20, justifyContent : 'flex-end'}}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
  
    )
  }
    export default CarouselCards