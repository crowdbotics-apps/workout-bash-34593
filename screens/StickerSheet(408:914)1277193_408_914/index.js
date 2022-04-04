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
      <View style={styles.View_408_915}>
        <View style={styles.View_I408_915_254_299} />
        <View style={styles.View_I408_915_254_300}>
          <Text style={styles.Text_I408_915_254_300}>􀝋</Text>
        </View>
        <View style={styles.View_I408_915_254_301}>
          <Text style={styles.Text_I408_915_254_301}>􀣌</Text>
        </View>
        <View style={styles.View_I408_915_254_302}>
          <Text style={styles.Text_I408_915_254_302}>􀙭</Text>
        </View>
        <View style={styles.View_I408_915_254_303}>
          <Text style={styles.Text_I408_915_254_303}>􀎟</Text>
        </View>
        <View style={styles.View_I408_915_254_304}>
          <Text style={styles.Text_I408_915_254_304}>Track</Text>
        </View>
        <View style={styles.View_I408_915_254_305}>
          <Text style={styles.Text_I408_915_254_305}>Friends</Text>
        </View>
        <View style={styles.View_I408_915_254_306}>
          <Text style={styles.Text_I408_915_254_306}>Challenges</Text>
        </View>
        <View style={styles.View_I408_915_254_307}>
          <Text style={styles.Text_I408_915_254_307}>Home</Text>
        </View>
        <View style={styles.View_I408_915_254_308}>
          <Text style={styles.Text_I408_915_254_308}>Settings</Text>
        </View>
        <View style={styles.View_I408_915_254_309}>
          <Text style={styles.Text_I408_915_254_309}>􀈌</Text>
        </View>
      </View>
      <View style={styles.View_408_916}>
        <Text style={styles.Text_408_916}>􀙭</Text>
      </View>
      <View style={styles.View_408_917}>
        <Text style={styles.Text_408_917}>Navigation Bar</Text>
      </View>
      <View style={styles.View_408_918}>
        <Text style={styles.Text_408_918}>Active State</Text>
      </View>
      <View style={styles.View_408_919}>
        <Text style={styles.Text_408_919}>Status Bar</Text>
      </View>
      <View style={styles.View_420_948}>
        <Text style={styles.Text_420_948}>Text Entry Box</Text>
      </View>
      <View style={styles.View_408_920}>
        <Text style={styles.Text_408_920}>
          Two-Way Slider (Challenge Type) - 14 pt font
        </Text>
      </View>
      <View style={styles.View_408_921}>
        <Text style={styles.Text_408_921}>
          Four-Way Slider (Duration) - 12 pt font
        </Text>
      </View>
      <View style={styles.View_408_922}>
        <Text style={styles.Text_408_922}>Add Button - 80 px diameter</Text>
      </View>
      <View style={styles.View_408_923}>
        <Text style={styles.Text_408_923}>Exercise Buttons</Text>
      </View>
      <View style={styles.View_410_1372}>
        <Text style={styles.Text_410_1372}>Task Button Row</Text>
      </View>
      <View style={styles.View_408_924}>
        <Text style={styles.Text_408_924}>Continue Buttons</Text>
      </View>
      <View style={styles.View_428_1240}>
        <Text style={styles.Text_428_1240}>Person Pickers</Text>
      </View>
      <View style={styles.View_408_925}>
        <View style={styles.View_408_926}>
          <View style={styles.View_I408_926_266_375}>
            <Text style={styles.Text_I408_926_266_375}>5G</Text>
          </View>
          <View style={styles.View_I408_926_266_376}>
            <View style={styles.View_I408_926_266_377} />
            <View style={styles.View_I408_926_266_378} />
            <View style={styles.View_I408_926_266_379} />
            <View style={styles.View_I408_926_266_380} />
          </View>
          <View style={styles.View_I408_926_266_381}>
            <View style={styles.View_I408_926_266_382} />
            <View style={styles.View_I408_926_266_383} />
            <View style={styles.View_I408_926_266_384} />
          </View>
          <View style={styles.View_I408_926_266_385}>
            <Text style={styles.Text_I408_926_266_385}>08:34</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_408_927}>
        <View style={styles.View_I408_927_385_943} />
        <View style={styles.View_I408_927_385_944} />
        <View style={styles.View_I408_927_385_945}>
          <Text style={styles.Text_I408_927_385_945}>Solo</Text>
        </View>
        <View style={styles.View_I408_927_385_946}>
          <Text style={styles.Text_I408_927_385_946}>Team</Text>
        </View>
      </View>
      <View style={styles.View_408_928}>
        <View style={styles.View_I408_928_286_399} />
        <View style={styles.View_I408_928_296_510} />
        <View style={styles.View_I408_928_286_401}>
          <Text style={styles.Text_I408_928_286_401}>Custom</Text>
        </View>
        <View style={styles.View_I408_928_296_527}>
          <Text style={styles.Text_I408_928_296_527}>Workweek</Text>
        </View>
        <View style={styles.View_I408_928_296_528}>
          <Text style={styles.Text_I408_928_296_528}>Weekend</Text>
        </View>
        <View style={styles.View_I408_928_296_529}>
          <Text style={styles.Text_I408_928_296_529}>Month</Text>
        </View>
      </View>
      <View style={styles.View_408_929}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b7f/3a53/60716ac1582b1c68cd4dce9981ce1e0d"
          }}
          style={styles.ImageBackground_I408_929_246_290}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/509c/98e8/ed77654074aff2b71973c36b9d1928ed"
          }}
          style={styles.ImageBackground_I408_929_247_294}
        />
      </View>
      <View style={styles.View_408_930}>
        <TouchableOpacity
          style={styles.TouchableOpacity_408_931}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("429_1583"))
          }
        >
          <View style={styles.View_408_932}>
            <Text style={styles.Text_408_932}>Push-Ups</Text>
          </View>
          <View style={styles.View_408_933}>
            <Text style={styles.Text_408_933}>􀁌</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_429_1583}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("408_931"))
          }
        >
          <View style={styles.View_429_1584}>
            <Text style={styles.Text_429_1584}>Push-Ups</Text>
          </View>
          <View style={styles.View_429_1585}>
            <Text style={styles.Text_429_1585}>􀁣</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_429_1453}>
        <View style={styles.View_410_1396}>
          <TouchableOpacity
            style={styles.TouchableOpacity_410_1376}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("429_1583"))
            }
          >
            <View style={styles.View_I410_1376_408_932}>
              <Text style={styles.Text_I410_1376_408_932}>A</Text>
            </View>
            <View style={styles.View_I410_1376_408_933}>
              <Text style={styles.Text_I410_1376_408_933}>􀁌</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_410_1380}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("429_1583"))
            }
          >
            <View style={styles.View_I410_1380_408_932}>
              <Text style={styles.Text_I410_1380_408_932}>A</Text>
            </View>
            <View style={styles.View_I410_1380_408_933}>
              <Text style={styles.Text_I410_1380_408_933}>􀁌</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_410_1383}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("429_1583"))
            }
          >
            <View style={styles.View_I410_1383_408_932}>
              <Text style={styles.Text_I410_1383_408_932}>A</Text>
            </View>
            <View style={styles.View_I410_1383_408_933}>
              <Text style={styles.Text_I410_1383_408_933}>􀁌</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_410_1384}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("429_1583"))
            }
          >
            <View style={styles.View_I410_1384_408_932}>
              <Text style={styles.Text_I410_1384_408_932}>A</Text>
            </View>
            <View style={styles.View_I410_1384_408_933}>
              <Text style={styles.Text_I410_1384_408_933}>􀁌</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_410_1389}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("429_1583"))
            }
          >
            <View style={styles.View_I410_1389_408_932}>
              <Text style={styles.Text_I410_1389_408_932}>A</Text>
            </View>
            <View style={styles.View_I410_1389_408_933}>
              <Text style={styles.Text_I410_1389_408_933}>􀁌</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_410_1390}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("429_1583"))
            }
          >
            <View style={styles.View_I410_1390_408_932}>
              <Text style={styles.Text_I410_1390_408_932}>A</Text>
            </View>
            <View style={styles.View_I410_1390_408_933}>
              <Text style={styles.Text_I410_1390_408_933}>􀁌</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_408_937}>
        <View style={styles.View_408_938}>
          <View style={styles.View_408_939} />
          <View style={styles.View_408_940}>
            <Text style={styles.Text_408_940}>􀁼</Text>
          </View>
          <View style={styles.View_408_941}>
            <Text style={styles.Text_408_941}>Continue</Text>
          </View>
        </View>
        <View style={styles.View_408_942}>
          <View style={styles.View_408_943} />
          <View style={styles.View_408_944}>
            <Text style={styles.Text_408_944}>􀁼</Text>
          </View>
          <View style={styles.View_408_945}>
            <Text style={styles.Text_408_945}>Continue</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d9/527a/83228cb88edb7d4e4d776f87dd174c01"
        }}
        style={styles.ImageBackground_408_946}
      />
      <View style={styles.View_420_941}>
        <TouchableOpacity
          style={styles.TouchableOpacity_420_934}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("420_942"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/354f/d10e/5393e8c0f72183bfc9cf9e3ea80165ba"
            }}
            style={styles.ImageBackground_408_700}
          />
          <View style={styles.View_408_712}>
            <View style={styles.View_408_713}>
              <Text style={styles.Text_408_713}>Challenge Name</Text>
            </View>
          </View>
          <View style={styles.View_408_715}>
            <View style={styles.View_408_716}>
              <Text style={styles.Text_408_716}>e.g. Battle of the Metros</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_420_985}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("420_993"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0307/21bc/be2a84f7933d06fd50212aa90ab79ef3"
            }}
            style={styles.ImageBackground_420_986}
          />
          <View style={styles.View_420_987}>
            <View style={styles.View_420_988}>
              <Text style={styles.Text_420_988}>Challenge Name</Text>
            </View>
          </View>
          <View style={styles.View_420_989}>
            <View style={styles.View_420_990}>
              <Text style={styles.Text_420_990}>State Fight</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/329b/f688/45d240aca5fe7ea40cd15468646e357a"
            }}
            style={styles.ImageBackground_420_992}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_420_993}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("420_985"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0307/21bc/be2a84f7933d06fd50212aa90ab79ef3"
            }}
            style={styles.ImageBackground_420_994}
          />
          <View style={styles.View_420_995}>
            <View style={styles.View_420_996}>
              <Text style={styles.Text_420_996}>Challenge Name</Text>
            </View>
          </View>
          <View style={styles.View_420_997}>
            <View style={styles.View_420_998}>
              <Text style={styles.Text_420_998}>State Fight</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_420_1004}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("420_985"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f3/46b7/21c88ac402d821e670591eb0f49bdd1c"
            }}
            style={styles.ImageBackground_420_1005}
          />
          <View style={styles.View_420_1006}>
            <View style={styles.View_420_1007}>
              <Text style={styles.Text_420_1007}>Challenge Name</Text>
            </View>
          </View>
          <View style={styles.View_420_1008}>
            <View style={styles.View_420_1009}>
              <Text style={styles.Text_420_1009}>State Fight</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_420_942}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("420_960"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0307/21bc/be2a84f7933d06fd50212aa90ab79ef3"
            }}
            style={styles.ImageBackground_420_943}
          />
          <View style={styles.View_420_944}>
            <View style={styles.View_420_945}>
              <Text style={styles.Text_420_945}>Challenge Name</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/329b/f688/45d240aca5fe7ea40cd15468646e357a"
            }}
            style={styles.ImageBackground_420_991}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_420_960}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("420_942"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0307/21bc/be2a84f7933d06fd50212aa90ab79ef3"
            }}
            style={styles.ImageBackground_420_961}
          />
          <View style={styles.View_420_962}>
            <View style={styles.View_420_963}>
              <Text style={styles.Text_420_963}>Challenge Name</Text>
            </View>
          </View>
          <View style={styles.View_420_964} />
        </TouchableOpacity>
      </View>
      <View style={styles.View_428_1233}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e112/2426/3d96603cd9cd2b9fc5e997465f7f71bc"
          }}
          style={styles.TouchableOpacity_428_1229}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("428_1234"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_428_1234}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("428_1229"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afe/7cdb/273d1359260a9e35205f1e76ec34fc7d"
            }}
            style={styles.ImageBackground_428_1236}
          />
          <View style={styles.View_428_1246}>
            <Text style={styles.Text_428_1246}>􀁣</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("188%") },
  View_408_915: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_915_254_299: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 245, 243, 1)"
  },
  View_I408_915_254_300: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_300: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_301: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_301: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_302: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_302: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_303: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_303: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_304: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_304: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_305: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_305: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_306: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_306: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_307: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_307: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_308: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_308: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_915_254_309: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_915_254_309: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_916: {
    width: wp("2%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_408_916: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_917: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_408_917: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_918: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_408_918: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_919: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_408_919: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_948: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_420_948: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_920: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_408_920: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_921: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_408_921: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_922: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_408_922: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_923: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_408_923: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_410_1372: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("173%"),
    justifyContent: "flex-start"
  },
  Text_410_1372: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_924: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("131%"),
    justifyContent: "flex-start"
  },
  Text_408_924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_428_1240: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("134%"),
    justifyContent: "flex-start"
  },
  Text_428_1240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_925: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_408_926: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_926_266_375: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_926_266_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_926_266_376: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%")
  },
  View_I408_926_266_377: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_926_266_378: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_926_266_379: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_926_266_380: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_926_266_381: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%")
  },
  View_I408_926_266_382: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.9492018222808838
  },
  View_I408_926_266_383: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(58, 183, 78, 1)"
  },
  View_I408_926_266_384: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_926_266_385: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_926_266_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.544198989868164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_927: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_927_385_943: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)",
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_I408_927_385_944: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_927_385_945: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_927_385_945: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_927_385_946: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_927_385_946: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_928: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_928_286_399: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)",
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_I408_928_296_510: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_928_286_401: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_928_286_401: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_928_296_527: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_928_296_527: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_928_296_528: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_928_296_528: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_928_296_529: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_928_296_529: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_929: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("88%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I408_929_246_290: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I408_929_247_294: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_408_930: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("107%")
  },
  TouchableOpacity_408_931: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_932: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_933: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_429_1583: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_429_1584: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_429_1584: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1585: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_429_1585: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1453: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("177%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_410_1396: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_410_1376: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1376_408_932: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1376_408_933: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_410_1380: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1380_408_932: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1380_408_933: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_410_1383: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1383_408_932: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1383_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1383_408_933: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1383_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_410_1384: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1384_408_932: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1384_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1384_408_933: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1384_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_410_1389: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1389_408_932: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1389_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1389_408_933: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1389_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_410_1390: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1390_408_932: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1390_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1390_408_933: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1390_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_937: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("133%")
  },
  View_408_938: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_939: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_408_940: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_940: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_941: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_408_941: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_942: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_943: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_408_944: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_944: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_945: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_408_945: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_946: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("48%"),
    resizeMode: "cover"
  },
  View_420_941: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("45%")
  },
  TouchableOpacity_420_934: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_408_700: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_408_712: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_713: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_713: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_715: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_716: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_716: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_420_985: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_420_986: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_420_987: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_420_988: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_988: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_989: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_420_990: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_990: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_420_992: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  TouchableOpacity_420_993: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_420_994: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_420_995: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_420_996: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_996: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_997: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_420_998: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_998: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_420_1004: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_420_1005: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_420_1006: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_420_1007: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_1007: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_1008: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_420_1009: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_1009: {
    color: "rgba(76, 185, 99, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_420_942: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_420_943: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_420_944: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_420_945: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_945: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_420_991: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%")
  },
  TouchableOpacity_420_960: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_420_961: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_420_962: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_420_963: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_420_963: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_964: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_428_1233: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("137%")
  },
  TouchableOpacity_428_1229: {
    width: wp("4%"),
    height: hp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_428_1234: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_428_1236: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_428_1246: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_428_1246: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
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
