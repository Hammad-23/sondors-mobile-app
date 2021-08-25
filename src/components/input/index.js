import React from 'react';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Label,
  Image,
} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default function InputBox(props) {
  return (
    <Item floatingLabel>
      {/* <Icon active name='home' /> */}
      <EvilIcons color="black" size={15} name="envelope" />

      <Label>{props.floatLabel}</Label>

      <Input {...props} />
    </Item>
  );
}
