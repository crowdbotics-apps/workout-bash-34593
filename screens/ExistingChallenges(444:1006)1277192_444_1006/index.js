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
      <View style={styles.View_444_1007}>
        <Text style={styles.Text_444_1007}>Challenges</Text>
      </View>
      <View style={styles.View_444_1008}>
        <View style={styles.View_444_1009} />
        <View style={styles.View_444_1010}>
          <Text style={styles.Text_444_1010}>Rip My Sleeves</Text>
        </View>
        <View style={styles.View_444_1011}>
          <Text style={styles.Text_444_1011}>
            Your Team Score: 603 / 1000 1st Place Team: 755 / 1000
          </Text>
        </View>
        <View style={styles.View_444_1012}>
          <Text style={styles.Text_444_1012}>Finishes This Friday</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876a/17c4/64081c7156a3929ce288e682b1b1b49a"
          }}
          style={styles.ImageBackground_444_1013}
        />
        <View style={styles.View_444_1014}>
          <Text style={styles.Text_444_1014}>2nd</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6814/2c57/85b337ce0e1d485ba4ea7be1b4a91952"
          }}
          style={styles.ImageBackground_444_1015}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e5c/701f/a5577e95a25117b228ce7a3bea769918"
          }}
          style={styles.ImageBackground_444_1016}
        />
      </View>
      <View style={styles.View_444_1017}>
        <View style={styles.View_444_1018} />
        <View style={styles.View_444_1019}>
          <Text style={styles.Text_444_1019}>March Radness</Text>
        </View>
        <View style={styles.View_444_1020}>
          <Text style={styles.Text_444_1020}>
            Your Team Score: 200 / 1000 2nd Place Team: 178 / 1000
          </Text>
        </View>
        <View style={styles.View_444_1021}>
          <Text style={styles.Text_444_1021}>Finishes In 3 weeks 2 days</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876a/17c4/64081c7156a3929ce288e682b1b1b49a"
          }}
          style={styles.ImageBackground_444_1022}
        />
        <View style={styles.View_444_1023}>
          <Text style={styles.Text_444_1023}>1st</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9f/634a/27c2a568eb0f5817c5dfd48cea94f41b"
          }}
          style={styles.ImageBackground_444_1024}
        />
      </View>
      <View style={styles.View_444_1054}>
        <View style={styles.View_444_1055} />
        <View style={styles.View_444_1056}>
          <Text style={styles.Text_444_1056}>Push and Pull</Text>
        </View>
        <View style={styles.View_444_1057}>
          <Text style={styles.Text_444_1057}>
            Your Score: 0 / 1000 2nd Place: 0 / 1000
          </Text>
        </View>
        <View style={styles.View_444_1058}>
          <Text style={styles.Text_444_1058}>Starts In 2 days</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876a/17c4/64081c7156a3929ce288e682b1b1b49a"
          }}
          style={styles.ImageBackground_444_1059}
        />
        <View style={styles.View_444_1060}>
          <Text style={styles.Text_444_1060}>1st</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_444_1061} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_444_1025}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_698"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b7f/3a53/60716ac1582b1c68cd4dce9981ce1e0d"
          }}
          style={styles.ImageBackground_I444_1025_246_290}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/509c/98e8/ed77654074aff2b71973c36b9d1928ed"
          }}
          style={styles.ImageBackground_I444_1025_247_294}
        />
      </TouchableOpacity>
      <View style={styles.View_444_1026}>
        <View style={styles.View_I444_1026_266_375}>
          <Text style={styles.Text_I444_1026_266_375}>5G</Text>
        </View>
        <View style={styles.View_I444_1026_266_376}>
          <View style={styles.View_I444_1026_266_377} />
          <View style={styles.View_I444_1026_266_378} />
          <View style={styles.View_I444_1026_266_379} />
          <View style={styles.View_I444_1026_266_380} />
        </View>
        <View style={styles.View_I444_1026_266_381}>
          <View style={styles.View_I444_1026_266_382} />
          <View style={styles.View_I444_1026_266_383} />
          <View style={styles.View_I444_1026_266_384} />
        </View>
        <View style={styles.View_I444_1026_266_385}>
          <Text style={styles.Text_I444_1026_266_385}>08:34</Text>
        </View>
      </View>
      <View style={styles.View_444_1027}>
        <View style={styles.View_I444_1027_254_299} />
        <View style={styles.View_I444_1027_254_300}>
          <Text style={styles.Text_I444_1027_254_300}>􀝋</Text>
        </View>
        <View style={styles.View_I444_1027_254_301}>
          <Text style={styles.Text_I444_1027_254_301}>􀣌</Text>
        </View>
        <View style={styles.View_I444_1027_254_302}>
          <Text style={styles.Text_I444_1027_254_302}>􀙭</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I444_1027_254_303}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("408_662"))
          }
        >
          <Text style={styles.Text_I444_1027_254_303}>􀎟</Text>
        </TouchableOpacity>
        <View style={styles.View_I444_1027_254_304}>
          <Text style={styles.Text_I444_1027_254_304}>Track</Text>
        </View>
        <View style={styles.View_I444_1027_254_305}>
          <Text style={styles.Text_I444_1027_254_305}>Friends</Text>
        </View>
        <View style={styles.View_I444_1027_254_306}>
          <Text style={styles.Text_I444_1027_254_306}>Challenges</Text>
        </View>
        <View style={styles.View_I444_1027_254_307}>
          <Text style={styles.Text_I444_1027_254_307}>Home</Text>
        </View>
        <View style={styles.View_I444_1027_254_308}>
          <Text style={styles.Text_I444_1027_254_308}>Settings</Text>
        </View>
        <View style={styles.View_I444_1027_254_309}>
          <Text style={styles.Text_I444_1027_254_309}>􀈌</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(67, 83, 94, 1)" },
  View_2: { height: hp("115%") },
  View_444_1007: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_444_1007: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1008: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("30%")
  },
  View_444_1009: {
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
  View_444_1010: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_444_1010: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1011: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_444_1011: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1012: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_444_1012: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_444_1013: {
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
  View_444_1014: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_444_1014: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_444_1015: {
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
  ImageBackground_444_1016: {
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
  View_444_1017: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%")
  },
  View_444_1018: {
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
  View_444_1019: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_444_1019: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1020: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_444_1020: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1021: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_444_1021: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_444_1022: {
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
  View_444_1023: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_444_1023: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_444_1024: {
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
  View_444_1054: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("62%")
  },
  View_444_1055: {
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
  View_444_1056: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_444_1056: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1057: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_444_1057: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1058: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_444_1058: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_444_1059: {
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
  View_444_1060: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_444_1060: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1061: {
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
  TouchableOpacity_444_1025: {
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
  ImageBackground_I444_1025_246_290: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I444_1025_247_294: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_444_1026: {
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
  View_I444_1026_266_375: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I444_1026_266_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1026_266_376: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1%")
  },
  View_I444_1026_266_377: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I444_1026_266_378: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I444_1026_266_379: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I444_1026_266_380: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I444_1026_266_381: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%")
  },
  View_I444_1026_266_382: {
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
  View_I444_1026_266_383: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(58, 183, 78, 1)"
  },
  View_I444_1026_266_384: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I444_1026_266_385: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I444_1026_266_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.544198989868164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_1027: {
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
  View_I444_1027_254_299: {
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
  View_I444_1027_254_300: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_300: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_301: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_301: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_302: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_302: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I444_1027_254_303: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_303: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_304: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_304: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_305: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_305: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_306: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_306: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_307: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_307: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_308: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_308: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I444_1027_254_309: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I444_1027_254_309: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
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
