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
      <View style={styles.View_408_793}>
        <Text style={styles.Text_408_793}>Create a Challenge</Text>
      </View>
      <View style={styles.View_408_794}>
        <Text style={styles.Text_408_794}>Back</Text>
      </View>
      <View style={styles.View_408_795}>
        <View style={styles.View_I408_795_266_375}>
          <Text style={styles.Text_I408_795_266_375}>5G</Text>
        </View>
        <View style={styles.View_I408_795_266_376}>
          <View style={styles.View_I408_795_266_377} />
          <View style={styles.View_I408_795_266_378} />
          <View style={styles.View_I408_795_266_379} />
          <View style={styles.View_I408_795_266_380} />
        </View>
        <View style={styles.View_I408_795_266_381}>
          <View style={styles.View_I408_795_266_382} />
          <View style={styles.View_I408_795_266_383} />
          <View style={styles.View_I408_795_266_384} />
        </View>
        <View style={styles.View_I408_795_266_385}>
          <Text style={styles.Text_I408_795_266_385}>08:34</Text>
        </View>
      </View>
      <View style={styles.View_408_796}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6790/7b5e/00e6206bcd888358306cc42c950ec6a1"
          }}
          style={styles.ImageBackground_408_797}
        />
        <View style={styles.View_408_798}>
          <View style={styles.View_408_799}>
            <Text style={styles.Text_408_799}>Invite Friends</Text>
          </View>
        </View>
        <View style={styles.View_408_800}>
          <View style={styles.View_408_801}>
            <Text style={styles.Text_408_801}>Search</Text>
          </View>
        </View>
        <View style={styles.View_408_802}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e27/20fd/86c73c8b6a37caeb7ce384257f9e9bdc"
            }}
            style={styles.TouchableOpacity_428_1230}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb61/e5ab/c08b28e548b75e079b73bca52d0f933b"
            }}
            style={styles.TouchableOpacity_444_972}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55ec/6adc/8e758f64452fd3682761d7a5f557f8f7"
            }}
            style={styles.TouchableOpacity_444_984}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/764a/f76e/e209ca5d93bf3bbacc58ec97114b922c"
            }}
            style={styles.TouchableOpacity_438_961}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbca/5d86/5cf29cbb538864d87c6115eec768733d"
            }}
            style={styles.TouchableOpacity_444_973}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d545/26ee/8b63fa20bcf2cb31e6f5f0f675252ca3"
            }}
            style={styles.TouchableOpacity_444_985}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5b0/d3be/9913756029c19f41bbeb736535ae2578"
            }}
            style={styles.TouchableOpacity_444_955}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff8/8dfc/26c4b7b1ddf1cc3c8c7524169953dccb"
            }}
            style={styles.TouchableOpacity_444_974}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec6/d607/01841a1fe79df4223d3958c48682c754"
            }}
            style={styles.TouchableOpacity_444_986}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2693/90ef/5635c7afb87e068fda322787fc72c8ca"
            }}
            style={styles.TouchableOpacity_444_966}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b340/5726/6d525b72febd37d0485c715bc28f31dc"
            }}
            style={styles.TouchableOpacity_444_975}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0bd/6abe/d279b0f44671f59d38f9faebb158c910"
            }}
            style={styles.TouchableOpacity_444_987}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7ed/9ee0/c525515a0b71d5f00c08111766003d8f"
            }}
            style={styles.TouchableOpacity_444_967}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42ee/377e/def3bb8e7dafec39a014883d32ecefca"
            }}
            style={styles.TouchableOpacity_444_976}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74d2/e364/c7aae0a0b570844cc4aa86b3debe1836"
            }}
            style={styles.TouchableOpacity_444_988}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9364/fd6b/ebd3b7068356234c75b4923cb341c06f"
            }}
            style={styles.TouchableOpacity_444_968}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e4e/e8a9/39e188574e3a543cfd966a20754de6fd"
            }}
            style={styles.TouchableOpacity_444_977}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bde9/16ac/c86b20542983bb79a4d4eba700782824"
            }}
            style={styles.TouchableOpacity_444_989}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("428_1234"))
            }
          />
          <View style={styles.View_408_804}>
            <Text style={styles.Text_408_804}>Derek Steven</Text>
          </View>
          <View style={styles.View_408_805}>
            <Text style={styles.Text_408_805}>Dylan Wells</Text>
          </View>
          <View style={styles.View_408_807}>
            <Text style={styles.Text_408_807}>Katie Waverka</Text>
          </View>
          <View style={styles.View_408_808}>
            <Text style={styles.Text_408_808}>Tonia Renault</Text>
          </View>
          <View style={styles.View_408_810}>
            <Text style={styles.Text_408_810}>Richard Stamos</Text>
          </View>
          <View style={styles.View_408_811}>
            <Text style={styles.Text_408_811}>Maggie Lu</Text>
          </View>
          <View style={styles.View_408_813}>
            <Text style={styles.Text_408_813}>Kevin Corbald</Text>
          </View>
          <View style={styles.View_408_814}>
            <Text style={styles.Text_408_814}>Jason D’evalia</Text>
          </View>
          <View style={styles.View_408_815}>
            <Text style={styles.Text_408_815}>Daniel Dockery</Text>
          </View>
          <View style={styles.View_408_816}>
            <Text style={styles.Text_408_816}>Renée Lamb</Text>
          </View>
          <View style={styles.View_408_817}>
            <Text style={styles.Text_408_817}>Samina Jayakar</Text>
          </View>
          <View style={styles.View_408_818}>
            <Text style={styles.Text_408_818}>Sam Bond</Text>
          </View>
          <View style={styles.View_408_819}>
            <Text style={styles.Text_408_819}>Keeley Lucas</Text>
          </View>
          <View style={styles.View_408_820}>
            <Text style={styles.Text_408_820}>Ana Samuel</Text>
          </View>
          <View style={styles.View_444_963}>
            <Text style={styles.Text_444_963}>Alicia Bell</Text>
          </View>
          <View style={styles.View_408_812}>
            <Text style={styles.Text_408_812}>Michelle Bridges</Text>
          </View>
          <View style={styles.View_444_964}>
            <Text style={styles.Text_444_964}>Melvin Smith</Text>
          </View>
          <View style={styles.View_444_965}>
            <Text style={styles.Text_444_965}>John Steger</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_408_839}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_844"))
        }
      />
      <View style={styles.View_408_840}>
        <Text style={styles.Text_408_840}>Swipe for More</Text>
      </View>
      <View style={styles.View_408_841}>
        <View style={styles.View_I408_841_254_299} />
        <View style={styles.View_I408_841_254_300}>
          <Text style={styles.Text_I408_841_254_300}>􀝋</Text>
        </View>
        <View style={styles.View_I408_841_254_301}>
          <Text style={styles.Text_I408_841_254_301}>􀣌</Text>
        </View>
        <View style={styles.View_I408_841_254_302}>
          <Text style={styles.Text_I408_841_254_302}>􀙭</Text>
        </View>
        <View style={styles.View_I408_841_254_303}>
          <Text style={styles.Text_I408_841_254_303}>􀎟</Text>
        </View>
        <View style={styles.View_I408_841_254_304}>
          <Text style={styles.Text_I408_841_254_304}>Track</Text>
        </View>
        <View style={styles.View_I408_841_254_305}>
          <Text style={styles.Text_I408_841_254_305}>Friends</Text>
        </View>
        <View style={styles.View_I408_841_254_306}>
          <Text style={styles.Text_I408_841_254_306}>Challenges</Text>
        </View>
        <View style={styles.View_I408_841_254_307}>
          <Text style={styles.Text_I408_841_254_307}>Home</Text>
        </View>
        <View style={styles.View_I408_841_254_308}>
          <Text style={styles.Text_I408_841_254_308}>Settings</Text>
        </View>
        <View style={styles.View_I408_841_254_309}>
          <Text style={styles.Text_I408_841_254_309}>􀈌</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_408_842}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_844"))
        }
      >
        <Text style={styles.Text_408_842}>􀁼</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_408_843}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_844"))
        }
      >
        <Text style={styles.Text_408_843}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(67, 83, 94, 1)" },
  View_2: { height: hp("115%") },
  View_408_793: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_408_793: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_794: {
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
  Text_408_794: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_795: {
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
  View_I408_795_266_375: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_795_266_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_795_266_376: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1%")
  },
  View_I408_795_266_377: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_795_266_378: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_795_266_379: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_795_266_380: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_795_266_381: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%")
  },
  View_I408_795_266_382: {
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
  View_I408_795_266_383: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(58, 183, 78, 1)"
  },
  View_I408_795_266_384: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_795_266_385: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_795_266_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.544198989868164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_796: {
    width: wp("270%"),
    minWidth: wp("270%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("33%")
  },
  ImageBackground_408_797: {
    width: wp("270%"),
    minWidth: wp("270%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_408_798: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_799: {
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
  Text_408_799: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_800: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_408_801: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_801: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_802: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_428_1230: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_444_972: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_444_984: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_438_961: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  TouchableOpacity_444_973: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  TouchableOpacity_444_985: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  TouchableOpacity_444_955: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  TouchableOpacity_444_974: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  TouchableOpacity_444_986: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  TouchableOpacity_444_966: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%")
  },
  TouchableOpacity_444_975: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%")
  },
  TouchableOpacity_444_987: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%")
  },
  TouchableOpacity_444_967: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%")
  },
  TouchableOpacity_444_976: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%")
  },
  TouchableOpacity_444_988: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%")
  },
  TouchableOpacity_444_968: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("154%")
  },
  TouchableOpacity_444_977: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("154%")
  },
  TouchableOpacity_444_989: {
    width: wp("26%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("154%")
  },
  View_408_804: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_408_804: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_805: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_408_805: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_807: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_408_807: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_808: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_408_808: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_810: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_408_810: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_811: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_408_811: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_813: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_408_813: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_814: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_408_814: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_815: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_408_815: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_816: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_408_816: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_817: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_408_817: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_818: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("154%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_408_818: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_819: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("155%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_408_819: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_820: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("155%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_408_820: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_963: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_444_963: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_812: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_408_812: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_964: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_444_964: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_965: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_444_965: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_408_839: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("95%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_408_840: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_408_840: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_841: {
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
  View_I408_841_254_299: {
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
  View_I408_841_254_300: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_300: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_301: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_301: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_302: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_302: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_303: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_303: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_304: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_304: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_305: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_305: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_306: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_306: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_307: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_307: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_308: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_308: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_841_254_309: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_841_254_309: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_408_842: {
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
  Text_408_842: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_408_843: {
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
  Text_408_843: {
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
