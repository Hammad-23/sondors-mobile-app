import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../utils/Constants';

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  }, {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];

export default class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View>
        <Text>
          Nulla Tempor Lorem ipsum is a text that is used to demonstrate the
          text Value in Apps
        </Text>
      </View>
    );
  };

  _renderHeader = section => {
    console.log(section,'section===>s')
    return (
      <View
        style={{
          // marginBottom: 10,
          borderColor: '#cecece',
          borderWidth: 1,
          borderRadius: 4,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          Lorem ipsum dolor sit amet
        </Text>
        <Icon name="pluscircleo" size={20} color={Colors.primaryColor} style={{paddingHorizontal:10}} />
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        <Text style={{fontSize:15, color:"grey",paddingHorizontal:5, marginTop:10,backgroundColor:"#ededed",borderColor:'#cecece',borderWidth:1,borderRadius:4}} >
          Nulla Tempor Lorem ipsum is a text that is used to demonstrate the
          text Value in Apps. Nulla Tempor Lorem ipsum is a text that is used to demonstrate the
          text Value in Apps
        </Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    console.log("thiss state-->> ", this.state.activeSections);
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        // renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        // containerStyle={{width:"90%", backgroundColor:"red", paddingHorizontal:20}}
        sectionContainerStyle={{
          paddingHorizontal: 20,
          paddingTop:30,
          // paddingBottom:30
          // backgroundColor: '',
          width: '95%',
          // flex:1,
          // borderRadius:10,
          alignSelf: 'center',
        }}
      />
    );
  }
}
