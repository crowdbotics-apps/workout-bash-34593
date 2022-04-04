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
      <View style={styles.View_408_699}>
        <Text style={styles.Text_408_699}>Create a Challenge</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f188/e9b5/4d745c7de8eb2e1af4cb5aed502beff8"
        }}
        style={styles.ImageBackground_408_701}
      />
      <View style={styles.View_408_702}>
        <Text style={styles.Text_408_702}>e.g. 10</Text>
      </View>
      <View style={styles.View_408_703} />
      <View style={styles.View_408_704}>
        <Text style={styles.Text_408_704}>Goals</Text>
      </View>
      <View style={styles.View_408_705}>
        <View style={styles.View_408_706}>
          <Text style={styles.Text_408_706}>Limits</Text>
        </View>
      </View>
      <View style={styles.View_408_707}>
        <View style={styles.View_I408_707_286_399} />
        <View style={styles.View_I408_707_296_510} />
        <View style={styles.View_I408_707_286_401}>
          <Text style={styles.Text_I408_707_286_401}>Custom</Text>
        </View>
        <View style={styles.View_I408_707_296_527}>
          <Text style={styles.Text_I408_707_296_527}>Workweek</Text>
        </View>
        <View style={styles.View_I408_707_296_528}>
          <Text style={styles.Text_I408_707_296_528}>Weekend</Text>
        </View>
        <View style={styles.View_I408_707_296_529}>
          <Text style={styles.Text_I408_707_296_529}>Month</Text>
        </View>
      </View>
      <View style={styles.View_408_709}>
        <Text style={styles.Text_408_709}>Maximum Participants</Text>
      </View>
      <View style={styles.View_408_710}>
        <View style={styles.View_408_711}>
          <Text style={styles.Text_408_711}>Duration</Text>
        </View>
      </View>
      <View style={styles.View_408_714}>
        <Text style={styles.Text_408_714}>Cancel</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_420_935}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("420_942"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/354f/d10e/5393e8c0f72183bfc9cf9e3ea80165ba"
          }}
          style={styles.ImageBackground_I420_935_408_700}
        />
        <View style={styles.View_I420_935_408_712}>
          <View style={styles.View_I420_935_408_713}>
            <Text style={styles.Text_I420_935_408_713}>Challenge Name</Text>
          </View>
        </View>
        <View style={styles.View_I420_935_408_715}>
          <View style={styles.View_I420_935_408_716}>
            <Text style={styles.Text_I420_935_408_716}>
              e.g. Battle of the Metros
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_408_717}>
        <View style={styles.View_I408_717_266_375}>
          <Text style={styles.Text_I408_717_266_375}>5G</Text>
        </View>
        <View style={styles.View_I408_717_266_376}>
          <View style={styles.View_I408_717_266_377} />
          <View style={styles.View_I408_717_266_378} />
          <View style={styles.View_I408_717_266_379} />
          <View style={styles.View_I408_717_266_380} />
        </View>
        <View style={styles.View_I408_717_266_381}>
          <View style={styles.View_I408_717_266_382} />
          <View style={styles.View_I408_717_266_383} />
          <View style={styles.View_I408_717_266_384} />
        </View>
        <View style={styles.View_I408_717_266_385}>
          <Text style={styles.Text_I408_717_266_385}>08:34</Text>
        </View>
      </View>
      <View style={styles.View_408_718} />
      <View style={styles.View_408_719}>
        <View style={styles.View_I408_719_178_108}>
          <View style={styles.View_I408_719_178_109}>
            <View style={styles.View_I408_719_178_109_178_148}>
              <View style={styles.View_I408_719_178_109_178_148_178_142}>
                <Text style={styles.Text_I408_719_178_109_178_148_178_142}>
                  Su
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_109_178_149}>
              <View style={styles.View_I408_719_178_109_178_149_178_142}>
                <Text style={styles.Text_I408_719_178_109_178_149_178_142}>
                  Mo
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_109_178_150}>
              <View style={styles.View_I408_719_178_109_178_150_178_142}>
                <Text style={styles.Text_I408_719_178_109_178_150_178_142}>
                  Tu
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_109_178_151}>
              <View style={styles.View_I408_719_178_109_178_151_178_142}>
                <Text style={styles.Text_I408_719_178_109_178_151_178_142}>
                  We
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_109_178_152}>
              <View style={styles.View_I408_719_178_109_178_152_178_142}>
                <Text style={styles.Text_I408_719_178_109_178_152_178_142}>
                  Th
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_109_178_153}>
              <View style={styles.View_I408_719_178_109_178_153_178_142}>
                <Text style={styles.Text_I408_719_178_109_178_153_178_142}>
                  Fr
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_109_178_154}>
              <View style={styles.View_I408_719_178_109_178_154_178_142}>
                <Text style={styles.Text_I408_719_178_109_178_154_178_142}>
                  Sa
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I408_719_178_110}>
            <View style={styles.View_I408_719_178_110_178_148}>
              <View style={styles.View_I408_719_178_110_178_148_178_138}>
                <Text style={styles.Text_I408_719_178_110_178_148_178_138}>
                  1
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_110_178_149}>
              <View style={styles.View_I408_719_178_110_178_149_178_138}>
                <Text style={styles.Text_I408_719_178_110_178_149_178_138}>
                  2
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_110_178_150}>
              <View style={styles.View_I408_719_178_110_178_150_178_138}>
                <Text style={styles.Text_I408_719_178_110_178_150_178_138}>
                  3
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_110_178_151}>
              <View style={styles.View_I408_719_178_110_178_151_178_138}>
                <Text style={styles.Text_I408_719_178_110_178_151_178_138}>
                  4
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_110_178_152}>
              <View style={styles.View_I408_719_178_110_178_152_178_138}>
                <Text style={styles.Text_I408_719_178_110_178_152_178_138}>
                  5
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_110_178_153}>
              <View style={styles.View_I408_719_178_110_178_153_178_138}>
                <Text style={styles.Text_I408_719_178_110_178_153_178_138}>
                  6
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_110_178_154}>
              <View style={styles.View_I408_719_178_110_178_154_178_138}>
                <Text style={styles.Text_I408_719_178_110_178_154_178_138}>
                  7
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I408_719_178_111}>
            <View style={styles.View_I408_719_178_111_178_148}>
              <View style={styles.View_I408_719_178_111_178_148_178_138}>
                <Text style={styles.Text_I408_719_178_111_178_148_178_138}>
                  8
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_111_178_149}>
              <View style={styles.View_I408_719_178_111_178_149_178_138}>
                <Text style={styles.Text_I408_719_178_111_178_149_178_138}>
                  9
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_111_178_150}>
              <View style={styles.View_I408_719_178_111_178_150_178_138}>
                <Text style={styles.Text_I408_719_178_111_178_150_178_138}>
                  10
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_111_178_151}>
              <View style={styles.View_I408_719_178_111_178_151_178_138}>
                <Text style={styles.Text_I408_719_178_111_178_151_178_138}>
                  11
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_111_178_152}>
              <View style={styles.View_I408_719_178_111_178_152_178_138}>
                <Text style={styles.Text_I408_719_178_111_178_152_178_138}>
                  12
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_111_178_153}>
              <View style={styles.View_I408_719_178_111_178_153_178_138}>
                <Text style={styles.Text_I408_719_178_111_178_153_178_138}>
                  13
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_111_178_154}>
              <View style={styles.View_I408_719_178_111_178_154_178_138}>
                <Text style={styles.Text_I408_719_178_111_178_154_178_138}>
                  14
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I408_719_178_112}>
            <View style={styles.View_I408_719_178_112_178_148}>
              <View style={styles.View_I408_719_178_112_178_148_178_138}>
                <Text style={styles.Text_I408_719_178_112_178_148_178_138}>
                  15
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_112_178_149}>
              <View style={styles.View_I408_719_178_112_178_149_178_140}>
                <Text style={styles.Text_I408_719_178_112_178_149_178_140}>
                  16
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_112_178_150}>
              <View style={styles.View_I408_719_178_112_178_150_178_140}>
                <Text style={styles.Text_I408_719_178_112_178_150_178_140}>
                  17
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_112_178_151}>
              <View style={styles.View_I408_719_178_112_178_151_178_140}>
                <Text style={styles.Text_I408_719_178_112_178_151_178_140}>
                  18
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_112_178_152}>
              <View style={styles.View_I408_719_178_112_178_152_178_140}>
                <Text style={styles.Text_I408_719_178_112_178_152_178_140}>
                  19
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_112_178_153}>
              <View style={styles.View_I408_719_178_112_178_153_178_140}>
                <Text style={styles.Text_I408_719_178_112_178_153_178_140}>
                  20
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_112_178_154}>
              <View style={styles.View_I408_719_178_112_178_154_178_138}>
                <Text style={styles.Text_I408_719_178_112_178_154_178_138}>
                  21
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I408_719_178_113}>
            <View style={styles.View_I408_719_178_113_178_148}>
              <View style={styles.View_I408_719_178_113_178_148_178_138}>
                <Text style={styles.Text_I408_719_178_113_178_148_178_138}>
                  22
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_113_178_149}>
              <View style={styles.View_I408_719_178_113_178_149_178_138}>
                <Text style={styles.Text_I408_719_178_113_178_149_178_138}>
                  23
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_113_178_150}>
              <View style={styles.View_I408_719_178_113_178_150_178_138}>
                <Text style={styles.Text_I408_719_178_113_178_150_178_138}>
                  24
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_113_178_151}>
              <View style={styles.View_I408_719_178_113_178_151_178_138}>
                <Text style={styles.Text_I408_719_178_113_178_151_178_138}>
                  25
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_113_178_152}>
              <View style={styles.View_I408_719_178_113_178_152_178_138}>
                <Text style={styles.Text_I408_719_178_113_178_152_178_138}>
                  26
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_113_178_153}>
              <View style={styles.View_I408_719_178_113_178_153_178_138}>
                <Text style={styles.Text_I408_719_178_113_178_153_178_138}>
                  27
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_113_178_154}>
              <View style={styles.View_I408_719_178_113_178_154_178_138}>
                <Text style={styles.Text_I408_719_178_113_178_154_178_138}>
                  28
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I408_719_178_114}>
            <View style={styles.View_I408_719_178_114_178_148}>
              <View style={styles.View_I408_719_178_114_178_148_178_138}>
                <Text style={styles.Text_I408_719_178_114_178_148_178_138}>
                  29
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_114_178_149}>
              <View style={styles.View_I408_719_178_114_178_149_178_138}>
                <Text style={styles.Text_I408_719_178_114_178_149_178_138}>
                  30
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_114_178_150}>
              <View style={styles.View_I408_719_178_114_178_150_178_144}>
                <Text style={styles.Text_I408_719_178_114_178_150_178_144}>
                  1
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_114_178_151}>
              <View style={styles.View_I408_719_178_114_178_151_178_144}>
                <Text style={styles.Text_I408_719_178_114_178_151_178_144}>
                  2
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_114_178_152}>
              <View style={styles.View_I408_719_178_114_178_152_178_144}>
                <Text style={styles.Text_I408_719_178_114_178_152_178_144}>
                  3
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_114_178_153}>
              <View style={styles.View_I408_719_178_114_178_153_178_144}>
                <Text style={styles.Text_I408_719_178_114_178_153_178_144}>
                  4
                </Text>
              </View>
            </View>
            <View style={styles.View_I408_719_178_114_178_154}>
              <View style={styles.View_I408_719_178_114_178_154_178_144}>
                <Text style={styles.Text_I408_719_178_114_178_154_178_144}>
                  5
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I408_719_178_115}>
          <View style={styles.View_I408_719_178_116}>
            <Text style={styles.Text_I408_719_178_116}>February 2022</Text>
          </View>
        </View>
        <View style={styles.View_I408_719_178_117}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/082f/cf59/e0918612ea9cc9c8933918554930ae2f"
            }}
            style={styles.ImageBackground_I408_719_178_118}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b7/800d/b56735db06c77bb463f60f11bb1f3fd7"
            }}
            style={styles.ImageBackground_I408_719_178_120}
          />
        </View>
      </View>
      <View style={styles.View_408_720}>
        <View style={styles.View_408_721} />
        <View style={styles.View_408_722}>
          <View style={styles.View_408_723}>
            <Text style={styles.Text_408_723}>Bonus Tasks</Text>
          </View>
        </View>
        <View style={styles.View_408_724}>
          <View style={styles.View_408_725}>
            <Text style={styles.Text_408_725}>Search</Text>
          </View>
        </View>
        <View style={styles.View_410_1319}>
          <View style={styles.View_410_1487}>
            <Text style={styles.Text_410_1487}>Daily Step Count Goal</Text>
          </View>
          <View style={styles.View_410_1526}>
            <Text style={styles.Text_410_1526}>Weekly Activity</Text>
          </View>
          <View style={styles.View_415_913}>
            <Text style={styles.Text_415_913}>One-Time Challenges</Text>
          </View>
          <View style={styles.View_410_1371}>
            <Text style={styles.Text_410_1371}>Swipe for More</Text>
          </View>
        </View>
        <View style={styles.View_429_1682}>
          <View style={styles.View_410_1397}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1397_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1397_410_1376_408_932}>
                <Text style={styles.Text_I410_1397_410_1376_408_932}>
                  5,000
                </Text>
              </View>
              <View style={styles.View_I410_1397_410_1376_408_933}>
                <Text style={styles.Text_I410_1397_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1397_410_1380}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1397_410_1380_408_932}>
                <Text style={styles.Text_I410_1397_410_1380_408_932}>
                  10,000
                </Text>
              </View>
              <View style={styles.View_I410_1397_410_1380_408_933}>
                <Text style={styles.Text_I410_1397_410_1380_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1397_410_1383}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1397_410_1383_408_932}>
                <Text style={styles.Text_I410_1397_410_1383_408_932}>
                  15,000
                </Text>
              </View>
              <View style={styles.View_I410_1397_410_1383_408_933}>
                <Text style={styles.Text_I410_1397_410_1383_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1397_410_1384}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1397_410_1384_408_932}>
                <Text style={styles.Text_I410_1397_410_1384_408_932}>A</Text>
              </View>
              <View style={styles.View_I410_1397_410_1384_408_933}>
                <Text style={styles.Text_I410_1397_410_1384_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1397_410_1389}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1397_410_1389_408_932}>
                <Text style={styles.Text_I410_1397_410_1389_408_932}>A</Text>
              </View>
              <View style={styles.View_I410_1397_410_1389_408_933}>
                <Text style={styles.Text_I410_1397_410_1389_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1397_410_1390}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1397_410_1390_408_932}>
                <Text style={styles.Text_I410_1397_410_1390_408_932}>A</Text>
              </View>
              <View style={styles.View_I410_1397_410_1390_408_933}>
                <Text style={styles.Text_I410_1397_410_1390_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_429_1683}>
          <View style={styles.View_429_1684}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1684_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1684_410_1376_408_932}>
                <Text style={styles.Text_I429_1684_410_1376_408_932}>
                  10 Mile Bike Ride
                </Text>
              </View>
              <View style={styles.View_I429_1684_410_1376_408_933}>
                <Text style={styles.Text_I429_1684_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1684_410_1380}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1684_410_1380_408_932}>
                <Text style={styles.Text_I429_1684_410_1380_408_932}>
                  8 Mile Hike
                </Text>
              </View>
              <View style={styles.View_I429_1684_410_1380_408_933}>
                <Text style={styles.Text_I429_1684_410_1380_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_429_1454}>
          <View style={styles.View_410_1527}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1527_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1527_410_1376_408_932}>
                <Text style={styles.Text_I410_1527_410_1376_408_932}>
                  Soccer Game
                </Text>
              </View>
              <View style={styles.View_I410_1527_410_1376_408_933}>
                <Text style={styles.Text_I410_1527_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I410_1527_410_1380}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I410_1527_410_1380_408_932}>
                <Text style={styles.Text_I410_1527_410_1380_408_932}>
                  Basketball Game
                </Text>
              </View>
              <View style={styles.View_I410_1527_410_1380_408_933}>
                <Text style={styles.Text_I410_1527_410_1380_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.View_408_726}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f738/f393/d29ebd84b7ab09a1cec16ee28eec7b89"
          }}
          style={styles.ImageBackground_408_727}
        />
        <View style={styles.View_408_728}>
          <View style={styles.View_408_729}>
            <Text style={styles.Text_408_729}>Exercises</Text>
          </View>
        </View>
        <View style={styles.View_408_730}>
          <View style={styles.View_408_731}>
            <Text style={styles.Text_408_731}>Search</Text>
          </View>
        </View>
        <View style={styles.View_408_732}>
          <Text style={styles.Text_408_732}>Swipe for More</Text>
        </View>
        <View style={styles.View_426_1114}>
          <Text style={styles.Text_426_1114}>Upper Body</Text>
        </View>
        <View style={styles.View_426_1187}>
          <Text style={styles.Text_426_1187}>Lower Body</Text>
        </View>
        <View style={styles.View_426_1207}>
          <Text style={styles.Text_426_1207}>Dynamic</Text>
        </View>
        <View style={styles.View_426_1053}>
          <Text style={styles.Text_426_1053}>Abs/Core/Back</Text>
        </View>
        <View style={styles.View_429_1700}>
          <View style={styles.View_429_1386}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1386_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1386_410_1376_408_932}>
                <Text style={styles.Text_I429_1386_410_1376_408_932}>
                  Burpees
                </Text>
              </View>
              <View style={styles.View_I429_1386_410_1376_408_933}>
                <Text style={styles.Text_I429_1386_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1386_410_1380}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1386_410_1380_408_932}>
                <Text style={styles.Text_I429_1386_410_1380_408_932}>
                  Jumping
                </Text>
              </View>
              <View style={styles.View_I429_1386_410_1380_408_933}>
                <Text style={styles.Text_I429_1386_410_1380_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1386_410_1383}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1386_410_1383_408_932}>
                <Text style={styles.Text_I429_1386_410_1383_408_932}>
                  Step-Ups
                </Text>
              </View>
              <View style={styles.View_I429_1386_410_1383_408_933}>
                <Text style={styles.Text_I429_1386_410_1383_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_429_1699}>
          <View style={styles.View_429_1387}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1387_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1387_410_1376_408_932}>
                <Text style={styles.Text_I429_1387_410_1376_408_932}>
                  Air Squats
                </Text>
              </View>
              <View style={styles.View_I429_1387_410_1376_408_933}>
                <Text style={styles.Text_I429_1387_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1387_410_1380}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1387_410_1380_408_932}>
                <Text style={styles.Text_I429_1387_410_1380_408_932}>
                  Donkey Kicks
                </Text>
              </View>
              <View style={styles.View_I429_1387_410_1380_408_933}>
                <Text style={styles.Text_I429_1387_410_1380_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1387_410_1383}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1387_410_1383_408_932}>
                <Text style={styles.Text_I429_1387_410_1383_408_932}>
                  Step-Ups
                </Text>
              </View>
              <View style={styles.View_I429_1387_410_1383_408_933}>
                <Text style={styles.Text_I429_1387_410_1383_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1387_410_1384}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1387_410_1384_408_932}>
                <Text style={styles.Text_I429_1387_410_1384_408_932}>
                  Pistol Squats
                </Text>
              </View>
              <View style={styles.View_I429_1387_410_1384_408_933}>
                <Text style={styles.Text_I429_1387_410_1384_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_519_1026}>
          <View style={styles.View_519_1027}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I519_1027_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I519_1027_410_1376_408_932}>
                <Text style={styles.Text_I519_1027_410_1376_408_932}>
                  Custom
                </Text>
              </View>
              <View style={styles.View_I519_1027_410_1376_408_933}>
                <Text style={styles.Text_I519_1027_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View_519_1042}>
            <Text style={styles.Text_519_1042}>Custom</Text>
          </View>
        </View>
        <View style={styles.View_429_1696}>
          <View style={styles.View_429_1388}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1388_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1388_410_1376_408_932}>
                <Text style={styles.Text_I429_1388_410_1376_408_932}>
                  Handstand Push-Up
                </Text>
              </View>
              <View style={styles.View_I429_1388_410_1376_408_933}>
                <Text style={styles.Text_I429_1388_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1388_410_1380}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1388_410_1380_408_932}>
                <Text style={styles.Text_I429_1388_410_1380_408_932}>
                  Push-Ups
                </Text>
              </View>
              <View style={styles.View_I429_1388_410_1380_408_933}>
                <Text style={styles.Text_I429_1388_410_1380_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1388_410_1383}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1388_410_1383_408_932}>
                <Text style={styles.Text_I429_1388_410_1383_408_932}>
                  Pull-Ups
                </Text>
              </View>
              <View style={styles.View_I429_1388_410_1383_408_933}>
                <Text style={styles.Text_I429_1388_410_1383_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1388_410_1384}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1388_410_1384_408_932}>
                <Text style={styles.Text_I429_1388_410_1384_408_932}>
                  Tricep Dips
                </Text>
              </View>
              <View style={styles.View_I429_1388_410_1384_408_933}>
                <Text style={styles.Text_I429_1388_410_1384_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1388_410_1389}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1388_410_1389_408_932}>
                <Text style={styles.Text_I429_1388_410_1389_408_932}>
                  Tricep Push-Up
                </Text>
              </View>
              <View style={styles.View_I429_1388_410_1389_408_933}>
                <Text style={styles.Text_I429_1388_410_1389_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1388_410_1390}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1388_410_1390_408_932}>
                <Text style={styles.Text_I429_1388_410_1390_408_932}>
                  Wide Push-Up
                </Text>
              </View>
              <View style={styles.View_I429_1388_410_1390_408_933}>
                <Text style={styles.Text_I429_1388_410_1390_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_429_1695}>
          <View style={styles.View_429_1389}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1389_410_1376}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1389_410_1376_408_932}>
                <Text style={styles.Text_I429_1389_410_1376_408_932}>
                  Air Bicycles
                </Text>
              </View>
              <View style={styles.View_I429_1389_410_1376_408_933}>
                <Text style={styles.Text_I429_1389_410_1376_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1389_410_1380}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1389_410_1380_408_932}>
                <Text style={styles.Text_I429_1389_410_1380_408_932}>
                  Butt-Ups
                </Text>
              </View>
              <View style={styles.View_I429_1389_410_1380_408_933}>
                <Text style={styles.Text_I429_1389_410_1380_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1389_410_1383}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1389_410_1383_408_932}>
                <Text style={styles.Text_I429_1389_410_1383_408_932}>
                  Crunches
                </Text>
              </View>
              <View style={styles.View_I429_1389_410_1383_408_933}>
                <Text style={styles.Text_I429_1389_410_1383_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1389_410_1384}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1389_410_1384_408_932}>
                <Text style={styles.Text_I429_1389_410_1384_408_932}>
                  Oblique Crunches
                </Text>
              </View>
              <View style={styles.View_I429_1389_410_1384_408_933}>
                <Text style={styles.Text_I429_1389_410_1384_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1389_410_1389}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1389_410_1389_408_932}>
                <Text style={styles.Text_I429_1389_410_1389_408_932}>
                  Planks
                </Text>
              </View>
              <View style={styles.View_I429_1389_410_1389_408_933}>
                <Text style={styles.Text_I429_1389_410_1389_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I429_1389_410_1390}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("429_1583"))
              }
            >
              <View style={styles.View_I429_1389_410_1390_408_932}>
                <Text style={styles.Text_I429_1389_410_1390_408_932}>
                  Sit-Ups
                </Text>
              </View>
              <View style={styles.View_I429_1389_410_1390_408_933}>
                <Text style={styles.Text_I429_1389_410_1390_408_933}>􀁌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_408_787}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("408_792"))
        }
      >
        <View style={styles.View_I408_787_387_1029} />
        <View style={styles.View_I408_787_387_1030}>
          <Text style={styles.Text_I408_787_387_1030}>􀁼</Text>
        </View>
        <View style={styles.View_I408_787_387_1031}>
          <Text style={styles.Text_I408_787_387_1031}>Continue</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_408_786}>
        <View style={styles.View_I408_786_254_299} />
        <View style={styles.View_I408_786_254_300}>
          <Text style={styles.Text_I408_786_254_300}>􀝋</Text>
        </View>
        <View style={styles.View_I408_786_254_301}>
          <Text style={styles.Text_I408_786_254_301}>􀣌</Text>
        </View>
        <View style={styles.View_I408_786_254_302}>
          <Text style={styles.Text_I408_786_254_302}>􀙭</Text>
        </View>
        <View style={styles.View_I408_786_254_303}>
          <Text style={styles.Text_I408_786_254_303}>􀎟</Text>
        </View>
        <View style={styles.View_I408_786_254_304}>
          <Text style={styles.Text_I408_786_254_304}>Track</Text>
        </View>
        <View style={styles.View_I408_786_254_305}>
          <Text style={styles.Text_I408_786_254_305}>Friends</Text>
        </View>
        <View style={styles.View_I408_786_254_306}>
          <Text style={styles.Text_I408_786_254_306}>Challenges</Text>
        </View>
        <View style={styles.View_I408_786_254_307}>
          <Text style={styles.Text_I408_786_254_307}>Home</Text>
        </View>
        <View style={styles.View_I408_786_254_308}>
          <Text style={styles.Text_I408_786_254_308}>Settings</Text>
        </View>
        <View style={styles.View_I408_786_254_309}>
          <Text style={styles.Text_I408_786_254_309}>􀈌</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(67, 83, 94, 1)" },
  View_2: { height: hp("301%") },
  View_408_699: {
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
  Text_408_699: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_701: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%")
  },
  View_408_702: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_408_702: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_703: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("73%"),
    backgroundColor: "rgba(67, 83, 94, 1)",
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_408_704: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("133%"),
    justifyContent: "flex-start"
  },
  Text_408_704: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_705: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("50%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_706: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_706: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_707: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_707_286_399: {
    flexGrow: 1,
    width: wp("88%"),
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
  View_I408_707_296_510: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_707_286_401: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_707_286_401: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_707_296_527: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_707_296_527: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_707_296_528: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_707_296_528: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_707_296_529: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_707_296_529: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_709: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_408_709: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_710: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("124%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_711: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_711: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_714: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_408_714: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_420_935: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I420_935_408_700: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_I420_935_408_712: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I420_935_408_713: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I420_935_408_713: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I420_935_408_715: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I420_935_408_716: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I420_935_408_716: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_717: {
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
  View_I408_717_266_375: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_717_266_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_717_266_376: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("1%")
  },
  View_I408_717_266_377: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_717_266_378: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_717_266_379: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_717_266_380: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_717_266_381: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%")
  },
  View_I408_717_266_382: {
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
  View_I408_717_266_383: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(58, 183, 78, 1)"
  },
  View_I408_717_266_384: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I408_717_266_385: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_717_266_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.544198989868164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_718: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("56%"),
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_408_719: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_108: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_148: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_148_178_142: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_109_178_148_178_142: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_109_178_149: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_149_178_142: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_109_178_149_178_142: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_109_178_150: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_150_178_142: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_109_178_150_178_142: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_109_178_151: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_151_178_142: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_109_178_151_178_142: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_109_178_152: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_152_178_142: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_109_178_152_178_142: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_109_178_153: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_153_178_142: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_109_178_153_178_142: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_109_178_154: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_109_178_154_178_142: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_109_178_154_178_142: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_110: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_148: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_148_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_110_178_148_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_110_178_149: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_149_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_110_178_149_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_110_178_150: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_150_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_110_178_150_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_110_178_151: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_151_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_110_178_151_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_110_178_152: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_152_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_110_178_152_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_110_178_153: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_153_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_110_178_153_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_110_178_154: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_110_178_154_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_110_178_154_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_111: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_148: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_148_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_111_178_148_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_111_178_149: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_149_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_111_178_149_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_111_178_150: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_150_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_111_178_150_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_111_178_151: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_151_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_111_178_151_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_111_178_152: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_152_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_111_178_152_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_111_178_153: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_153_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_111_178_153_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_111_178_154: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_111_178_154_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_111_178_154_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_112: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_112_178_148: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_112_178_148_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_112_178_148_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_112_178_149: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_719_178_112_178_149_178_140: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_112_178_149_178_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_112_178_150: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_719_178_112_178_150_178_140: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_112_178_150_178_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_112_178_151: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_719_178_112_178_151_178_140: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_112_178_151_178_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_112_178_152: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_719_178_112_178_152_178_140: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_112_178_152_178_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_112_178_153: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_719_178_112_178_153_178_140: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_112_178_153_178_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_112_178_154: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_112_178_154_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_112_178_154_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_113: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_148: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_148_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_113_178_148_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_113_178_149: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_149_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_113_178_149_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_113_178_150: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_150_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_113_178_150_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_113_178_151: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_151_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_113_178_151_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_113_178_152: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_152_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_113_178_152_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_113_178_153: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_153_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_113_178_153_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_113_178_154: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_113_178_154_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_113_178_154_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_114: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_148: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_148_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_114_178_148_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_114_178_149: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_149_178_138: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_114_178_149_178_138: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_114_178_150: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_150_178_144: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_114_178_150_178_144: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_114_178_151: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_151_178_144: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_114_178_151_178_144: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_114_178_152: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_152_178_144: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_114_178_152_178_144: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_114_178_153: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_153_178_144: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_114_178_153_178_144: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_114_178_154: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_719_178_114_178_154_178_144: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I408_719_178_114_178_154_178_144: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_115: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I408_719_178_116: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I408_719_178_116: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_719_178_117: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  ImageBackground_I408_719_178_118: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I408_719_178_120: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_408_720: {
    width: wp("270%"),
    minWidth: wp("270%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-17%"),
    top: hp("224%")
  },
  View_408_721: {
    width: wp("270%"),
    minWidth: wp("270%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(67, 83, 94, 1)",
    borderColor: "rgba(251, 245, 243, 1)",
    borderWidth: 1
  },
  View_408_722: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_723: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_723: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_724: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_408_725: {
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
  Text_408_725: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_410_1319: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_410_1487: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_410_1487: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_410_1526: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_410_1526: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_415_913: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_415_913: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_410_1371: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_410_1371: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1682: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_410_1397: {
    width: wp("178%"),
    minWidth: wp("178%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I410_1397_410_1376: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1397_410_1376_408_932: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1397_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I410_1397_410_1380: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1397_410_1380_408_932: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1397_410_1380_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I410_1397_410_1383: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1397_410_1383_408_932: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1383_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1397_410_1383_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1383_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I410_1397_410_1384: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("108%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1397_410_1384_408_932: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1384_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1397_410_1384_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1384_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I410_1397_410_1389: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("131%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1397_410_1389_408_932: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1389_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1397_410_1389_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1389_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I410_1397_410_1390: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("155%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1397_410_1390_408_932: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1390_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1397_410_1390_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1397_410_1390_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1683: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_429_1684: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I429_1684_410_1376: {
    flexGrow: 1,
    width: wp("54%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1684_410_1376_408_932: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1684_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1684_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1684_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1684_410_1380: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1684_410_1380_408_932: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1684_410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1684_410_1380_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1684_410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1454: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_410_1527: {
    width: wp("108%"),
    minWidth: wp("108%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I410_1527_410_1376: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1527_410_1376_408_932: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1527_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1527_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1527_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I410_1527_410_1380: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I410_1527_410_1380_408_932: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1527_410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I410_1527_410_1380_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I410_1527_410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_726: {
    width: wp("198%"),
    minWidth: wp("198%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19%"),
    top: hp("140%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_408_727: {
    width: wp("198%"),
    minWidth: wp("198%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_408_728: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_408_729: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_408_729: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_730: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_408_731: {
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
  Text_408_731: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_732: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_408_732: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_426_1114: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_426_1114: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_426_1187: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_426_1187: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_426_1207: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_426_1207: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_426_1053: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_426_1053: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1700: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_429_1386: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I429_1386_410_1376: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1386_410_1376_408_932: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1386_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1386_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1386_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1386_410_1380: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1386_410_1380_408_932: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1386_410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1386_410_1380_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1386_410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1386_410_1383: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1386_410_1383_408_932: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1386_410_1383_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1386_410_1383_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1386_410_1383_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1699: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_429_1387: {
    width: wp("182%"),
    minWidth: wp("182%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I429_1387_410_1376: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1387_410_1376_408_932: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1387_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1387_410_1380: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1387_410_1380_408_932: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1387_410_1380_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1387_410_1383: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1387_410_1383_408_932: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1383_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1387_410_1383_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1383_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1387_410_1384: {
    flexGrow: 1,
    width: wp("45%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("135%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1387_410_1384_408_932: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1384_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1387_410_1384_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1387_410_1384_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_519_1026: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_519_1027: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I519_1027_410_1376: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I519_1027_410_1376_408_932: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I519_1027_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I519_1027_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I519_1027_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_519_1042: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_519_1042: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1696: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_429_1388: {
    width: wp("297%"),
    minWidth: wp("297%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I429_1388_410_1376: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1388_410_1376_408_932: {
    flexGrow: 1,
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1388_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1388_410_1380: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1388_410_1380_408_932: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1388_410_1380_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1388_410_1383: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("109%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1388_410_1383_408_932: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1383_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1388_410_1383_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1383_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1388_410_1384: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("148%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1388_410_1384_408_932: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1384_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1388_410_1384_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1384_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1388_410_1389: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("192%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1388_410_1389_408_932: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1389_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1388_410_1389_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1389_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1388_410_1390: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("245%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1388_410_1390_408_932: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1390_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1388_410_1390_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1388_410_1390_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_1695: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_429_1389: {
    width: wp("259%"),
    minWidth: wp("259%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I429_1389_410_1376: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1389_410_1376_408_932: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1376_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1389_410_1376_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1376_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1389_410_1380: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1389_410_1380_408_932: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1380_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1389_410_1380_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1380_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1389_410_1383: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1389_410_1383_408_932: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1383_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1389_410_1383_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1383_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1389_410_1384: {
    flexGrow: 1,
    width: wp("56%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("129%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1389_410_1384_408_932: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1384_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1389_410_1384_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1384_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1389_410_1389: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("188%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1389_410_1389_408_932: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1389_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1389_410_1389_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1389_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I429_1389_410_1390: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("223%"),
    top: hp("1%"),
    backgroundColor: "rgba(67, 83, 94, 1)"
  },
  View_I429_1389_410_1390_408_932: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1390_408_932: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I429_1389_410_1390_408_933: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I429_1389_410_1390_408_933: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_408_787: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_787_387_1029: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 100, 36, 1)"
  },
  View_I408_787_387_1030: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_787_387_1030: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_787_387_1031: {
    flexGrow: 1,
    width: wp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I408_787_387_1031: {
    color: "rgba(251, 245, 243, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_786: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("289%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I408_786_254_299: {
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
  View_I408_786_254_300: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_300: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_301: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_301: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_302: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_302: {
    color: "rgba(235, 100, 36, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_303: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_303: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_304: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_304: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_305: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_305: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_306: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_306: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_307: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_307: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_308: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_308: {
    color: "rgba(67, 83, 94, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I408_786_254_309: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I408_786_254_309: {
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
