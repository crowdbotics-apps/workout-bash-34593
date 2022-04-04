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
      <View style={styles.View_408_845}>
        <Text style={styles.Text_408_845}>Confirm Details</Text>
      </View>
      <View style={styles.View_408_846}>
        <Text style={styles.Text_408_846}>Back</Text>
      </View>
      <View style={styles.View_408_847}>
        <View style={styles.View_I408_847_266_375}>
          <Text style={styles.Text_I408_847_266_375}>5G</Text>
        </View>
        <View style={styles.View_I408_847_266_376}>
          <View style={styles.View_I408_847_266_377} />
          <View style={styles.View_I408_847_266_378} />
          <View style={styles.View_I408_847_266_379} />
          <View style={styles.View_I408_847_266_380} />
        </View>
        <View style={styles.View_I408_847_266_381}>
          <View style={styles.View_I408_847_266_382} />
          <View style={styles.View_I408_847_266_383} />
          <View style={styles.View_I408_847_266_384} />
        </View>
        <View style={styles.View_I408_847_266_385}>
          <Text style={styles.Text_I408_847_266_385}>08:34</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_408_848}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_879"))
        }
      />
      <View style={styles.View_408_849}>
        <View style={styles.View_408_850}>
          <Text style={styles.Text_408_850}>Duration</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6719/2bac/ab6c4f1a04edbf39d73eb46e2517eff0"
        }}
        style={styles.ImageBackground_408_851}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f980/3216/0d684cc0792d12f71eba58dca9251c8d"
        }}
        style={styles.ImageBackground_408_852}
      />
      <View style={styles.View_408_853}>
        <View style={styles.View_408_854}>
          <Text style={styles.Text_408_854}>Friends</Text>
        </View>
      </View>
      <View style={styles.View_408_855}>
        <View style={styles.View_408_856}>
          <Text style={styles.Text_408_856}>Goals</Text>
        </View>
      </View>
      <View style={styles.View_408_857}>
        <Text style={styles.Text_408_857}>350</Text>
      </View>
      <View style={styles.View_408_858}>
        <Text style={styles.Text_408_858}>1</Text>
      </View>
      <View style={styles.View_408_859}>
        <Text style={styles.Text_408_859}>70</Text>
      </View>
      <View style={styles.View_408_860}>
        <Text style={styles.Text_408_860}>10</Text>
      </View>
      <View style={styles.View_408_861}>
        <Text style={styles.Text_408_861}>7 min</Text>
      </View>
      <View style={styles.View_408_862}>
        <Text style={styles.Text_408_862}>Exercises</Text>
      </View>
      <View style={styles.View_408_863}>
        <Text style={styles.Text_408_863}>Bonus Tasks</Text>
      </View>
      <View style={styles.View_408_864}>
        <Text style={styles.Text_408_864}>Push-Ups</Text>
      </View>
      <View style={styles.View_408_865}>
        <Text style={styles.Text_408_865}>Mile Run</Text>
      </View>
      <View style={styles.View_408_866}>
        <Text style={styles.Text_408_866}>Pull-Ups</Text>
      </View>
      <View style={styles.View_408_867}>
        <Text style={styles.Text_408_867}>Miles Bike Ride</Text>
      </View>
      <View style={styles.View_408_868}>
        <Text style={styles.Text_408_868}>Planks</Text>
      </View>
      <View style={styles.View_408_869}>
        <View style={styles.View_408_870}>
          <Text style={styles.Text_408_870}>Challenge Name</Text>
        </View>
      </View>
      <View style={styles.View_408_871}>
        <Text style={styles.Text_408_871}>Push and Pull</Text>
      </View>
      <View style={styles.View_408_872}>
        <Text style={styles.Text_408_872}>Feb 16 - Feb 22</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9627/1601/b23163bccab8f1196b903a5c9b02a5b9"
        }}
        style={styles.ImageBackground_408_873}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cff/0a69/6306ac1f25697e0dbbcd39792a922f34"
        }}
        style={styles.ImageBackground_408_874}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e1a/32ec/7ec49500eecc47ae3dd211b4b61441dc"
        }}
        style={styles.ImageBackground_408_875}
      />
      <View style={styles.View_408_876}>
        <View style={styles.View_I408_876_254_299} />
        <View style={styles.View_I408_876_254_300}>
          <Text style={styles.Text_I408_876_254_300}>􀝋</Text>
        </View>
        <View style={styles.View_I408_876_254_301}>
          <Text style={styles.Text_I408_876_254_301}>􀣌</Text>
        </View>
        <View style={styles.View_I408_876_254_302}>
          <Text style={styles.Text_I408_876_254_302}>􀙭</Text>
        </View>
        <View style={styles.View_I408_876_254_303}>
          <Text style={styles.Text_I408_876_254_303}>􀎟</Text>
        </View>
        <View style={styles.View_I408_876_254_304}>
          <Text style={styles.Text_I408_876_254_304}>Track</Text>
        </View>
        <View style={styles.View_I408_876_254_305}>
          <Text style={styles.Text_I408_876_254_305}>Friends</Text>
        </View>
        <View style={styles.View_I408_876_254_306}>
          <Text style={styles.Text_I408_876_254_306}>Challenges</Text>
        </View>
        <View style={styles.View_I408_876_254_307}>
          <Text style={styles.Text_I408_876_254_307}>Home</Text>
        </View>
        <View style={styles.View_I408_876_254_308}>
          <Text style={styles.Text_I408_876_254_308}>Settings</Text>
        </View>
        <View style={styles.View_I408_876_254_309}>
          <Text style={styles.Text_I408_876_254_309}>􀈌</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_408_877}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_879"))
        }
      >
        <Text style={styles.Text_408_877}>􀁼</Text>
      </TouchableOpacity>
      <View style={styles.View_408_878}>
        <Text style={styles.Text_408_878}>Confirm</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(67, 83, 94, 1)" },
  View_2: { height: hp("115%") },
  View_408_845: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_408_845: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_846: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_408_846: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_847: {
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
  View_I408_847_266_375: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_847_266_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_847_266_376: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1%")
  },
  View_I408_847_266_377: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_847_266_378: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_847_266_379: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_847_266_380: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_847_266_381: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%")
  },
  View_I408_847_266_382: {
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
  View_I408_847_266_383: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(58, 183, 78, 1)"
  },
  View_I408_847_266_384: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_847_266_385: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_847_266_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.544198989868164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_408_848: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("96%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_408_849: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("43%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_850: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_850: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_851: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("55%")
  },
  ImageBackground_408_852: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("72%")
  },
  View_408_853: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("53%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_854: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_854: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_855: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("70%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_856: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_856: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_857: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_408_857: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_858: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_408_858: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_859: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_408_859: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_860: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_408_860: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_861: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_408_861: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_862: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_408_862: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_863: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_408_863: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_864: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_408_864: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_865: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_408_865: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_866: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_408_866: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_867: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_408_867: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_868: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_408_868: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_869: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_870: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_870: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_871: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_408_871: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_872: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_408_872: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_873: {
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("58%")
  },
  ImageBackground_408_874: {
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("58%")
  },
  ImageBackground_408_875: {
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("58%")
  },
  View_408_876: {
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
  View_I408_876_254_299: {
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
  View_I408_876_254_300: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_300: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_301: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_301: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_302: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_302: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_303: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_303: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_304: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_304: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_305: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_305: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_306: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_306: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_307: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_307: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_308: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_308: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_876_254_309: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_876_254_309: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_408_877: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_408_877: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_878: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_408_878: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
