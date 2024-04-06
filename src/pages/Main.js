import { View, Image, FlatList, TouchableOpacity, Text } from "react-native";
import Header from "../common/Header";
import { useEffect, useState } from "react";
import { products } from "./products";

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [shoesList, setShoesLits] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shirtsList, setShirtsList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [jacketLits, setJacketList] = useState([]);
  useEffect(() => {
    let categories = [];
    products.category.map((item) => {
      categories.push(item.category);
    });
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesLits(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlipperList(products.category[4].data);
    setTrouserList(products.category[5].data);
    setCategoryList(categories);
  }, []);

  return (
    <View>
      <Header />
      <Image
        source={require("../../assets/banner.jpeg")}
        style={{
          width: "94%",
          height: 200,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <View>
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{ color: "#000", marginLeft: 10, marginRight: 10 }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Main;