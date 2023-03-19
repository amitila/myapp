import React, { useState, useRef } from "react";
import { Text, View, Dimensions, Image, Button } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get("window").width + 20;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: "Ami Neko",
    url: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/302429277_1705158236530083_2778884477716421616_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jJnpXimwTbIAX_lGQiT&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDa2sAVTmaP0PgWMA4on3ohLvia1phUSkgwmJ-pQDSVNw&oe=641B3057",
  },
  {
    id: 2,
    name: "Ngọc Sơn",
    url: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/273394924_1777734582617651_8343890262031318766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sSc6OS9EkUQAX_CB64W&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCKhr-sJQi29nnrrDjpETB4UEhNXbjZm3s63GiePFI3Nw&oe=641B841F",
  },
  {
    id: 3,
    name: "Nhật Trang",
    url: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/329602626_1236234433636457_3162120989437559236_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4XZbUYJPQ70AX9aQqb1&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBM4cvpeCtKowp45Jgdh2YKL7rDsNnjQn4KVxNK1jgf5w&oe=641A3E69",
  },
];

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
      <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: "bold" }}>
        {item.name}
      </Text>
    </View>
  );
};

export default function FeedScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <View style={{ marginVertical: 10 }}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "#F4BB41",
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: "black",
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
}
