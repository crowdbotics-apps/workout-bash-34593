import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b8d/6ff6/20d62b72f5cbde032b3cff8e47ba6331"
        }}
        style={styles.ImageBackground_408_663}
      />
      <View style={styles.View_408_664}>
        <Text style={styles.Text_408_664}>Home</Text>
      </View>
      <View style={styles.View_408_665}>
        <View style={styles.View_I408_665_266_375}>
          <Text style={styles.Text_I408_665_266_375}>5G</Text>
        </View>
        <View style={styles.View_I408_665_266_376}>
          <View style={styles.View_I408_665_266_377} />
          <View style={styles.View_I408_665_266_378} />
          <View style={styles.View_I408_665_266_379} />
          <View style={styles.View_I408_665_266_380} />
        </View>
        <View style={styles.View_I408_665_266_381}>
          <View style={styles.View_I408_665_266_382} />
          <View style={styles.View_I408_665_266_383} />
          <View style={styles.View_I408_665_266_384} />
        </View>
        <View style={styles.View_I408_665_266_385}>
          <Text style={styles.Text_I408_665_266_385}>08:34</Text>
        </View>
      </View>
      <View style={styles.View_408_666}>
        <View style={styles.View_I408_666_254_299} />
        <View style={styles.View_I408_666_254_300}>
          <Text style={styles.Text_I408_666_254_300}>􀝋</Text>
        </View>
        <View style={styles.View_I408_666_254_301}>
          <Text style={styles.Text_I408_666_254_301}>􀣌</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I408_666_254_302}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("408_892"))
          }
        >
          <Text style={styles.Text_I408_666_254_302}>􀙭</Text>
        </TouchableOpacity>
        <View style={styles.View_I408_666_254_303}>
          <Text style={styles.Text_I408_666_254_303}>􀎟</Text>
        </View>
        <View style={styles.View_I408_666_254_304}>
          <Text style={styles.Text_I408_666_254_304}>Track</Text>
        </View>
        <View style={styles.View_I408_666_254_305}>
          <Text style={styles.Text_I408_666_254_305}>Friends</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I408_666_254_306}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("408_892"))
          }
        >
          <Text style={styles.Text_I408_666_254_306}>Challenges</Text>
        </TouchableOpacity>
        <View style={styles.View_I408_666_254_307}>
          <Text style={styles.Text_I408_666_254_307}>Home</Text>
        </View>
        <View style={styles.View_I408_666_254_308}>
          <Text style={styles.Text_I408_666_254_308}>Settings</Text>
        </View>
        <View style={styles.View_I408_666_254_309}>
          <Text style={styles.Text_I408_666_254_309}>􀈌</Text>
        </View>
      </View>
      <View style={styles.View_408_667}>
        <View style={styles.View_408_668} />
        <View style={styles.View_408_669}>
          <Text style={styles.Text_408_669}>In March Radness</Text>
        </View>
        <View style={styles.View_408_670}>
          <Text style={styles.Text_408_670}>
            John added 43 points moving Golden Slate to 1st place
          </Text>
        </View>
        <View style={styles.View_408_671}>
          <Text style={styles.Text_408_671}>10:10 AM, 02/04/22</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d656/bff8/6eddd3f8dfc0836c0f17d6de658d2c9e"
          }}
          style={styles.ImageBackground_408_672}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9f/634a/27c2a568eb0f5817c5dfd48cea94f41b"
          }}
          style={styles.ImageBackground_408_673}
        />
      </View>
      <View style={styles.View_408_674}>
        <View style={styles.View_408_675} />
        <View style={styles.View_408_676}>
          <Text style={styles.Text_408_676}>In Rip My Sleeves</Text>
        </View>
        <View style={styles.View_408_677}>
          <Text style={styles.Text_408_677}>Kelsey says,</Text>
        </View>
        <View style={styles.View_408_678}>
          <Text style={styles.Text_408_678}>8:35 AM, 02/04/22</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e290/a0e6/6afd48b02583bb691d738630372d38d4"
          }}
          style={styles.ImageBackground_408_679}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6814/2c57/85b337ce0e1d485ba4ea7be1b4a91952"
          }}
          style={styles.ImageBackground_408_680}
        />
        <View style={styles.View_408_681} />
        <View style={styles.View_408_682}>
          <Text style={styles.Text_408_682}>
            Nothing will stop us now! Less than a day left.
          </Text>
        </View>
      </View>
      <View style={styles.View_408_683}>
        <View style={styles.View_408_684} />
        <View style={styles.View_408_685}>
          <Text style={styles.Text_408_685}>In Rip My Sleeves</Text>
        </View>
        <View style={styles.View_408_686}>
          <Text style={styles.Text_408_686}>
            Kelsey added 64 points increasing Ravagers lead to 152 points.
          </Text>
        </View>
        <View style={styles.View_408_687}>
          <Text style={styles.Text_408_687}>8:35 AM, 02/04/22</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e290/a0e6/6afd48b02583bb691d738630372d38d4"
          }}
          style={styles.ImageBackground_408_688}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6814/2c57/85b337ce0e1d485ba4ea7be1b4a91952"
          }}
          style={styles.ImageBackground_408_689}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_469_999}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_698"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b7f/3a53/60716ac1582b1c68cd4dce9981ce1e0d"
          }}
          style={styles.ImageBackground_I469_999_246_290}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/509c/98e8/ed77654074aff2b71973c36b9d1928ed"
          }}
          style={styles.ImageBackground_I469_999_247_294}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(67, 83, 94, 1)" },
  View_2: { height: hp("115%") },
  ImageBackground_408_663: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("13%")
  },
  View_408_664: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_408_664: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_665: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_665_266_375: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_665_266_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_665_266_376: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1%")
  },
  View_I408_665_266_377: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_665_266_378: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_665_266_379: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_665_266_380: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_665_266_381: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%")
  },
  View_I408_665_266_382: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.9492018222808838
  },
  View_I408_665_266_383: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(58, 183, 78, 1)"
  },
  View_I408_665_266_384: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_665_266_385: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_665_266_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.544198989868164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_666: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_666_254_299: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 245, 243, 1)"
  },
  View_I408_666_254_300: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_300: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_666_254_301: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_301: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I408_666_254_302: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_302: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_666_254_303: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_303: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_666_254_304: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_304: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_666_254_305: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_305: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I408_666_254_306: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_306: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_666_254_307: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_307: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_666_254_308: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_308: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_666_254_309: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_666_254_309: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_667: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%")
  },
  View_408_668: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 245, 243, 1)",
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_408_669: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_408_669: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_670: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_408_670: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_671: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_408_671: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_672: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_408_673: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_408_674: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("54%")
  },
  View_408_675: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 245, 243, 1)",
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_408_676: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_408_676: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_677: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_408_677: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_678: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_408_678: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_679: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_408_680: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_408_681: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_408_682: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_408_682: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_683: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%")
  },
  View_408_684: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 245, 243, 1)",
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_408_685: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_408_685: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_686: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_408_686: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_687: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_408_687: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_688: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_408_689: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  TouchableOpacity_469_999: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("91%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I469_999_246_290: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I469_999_247_294: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
