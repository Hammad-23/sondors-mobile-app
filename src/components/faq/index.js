import React from 'react';
import {View,Text} from 'react-native';


export default function FaQ(){
    const questions = [{
        question: "How can I help you?",
             reply: "You have several options to choose:",
            //  bullets: bullets,
             actionText: "I'm ready to help!",
            //  onClick: action_example
      }]
      const  props  = {
        question: "How can I help you?",
        reply: "You have several options to choose:",
        bullets: bullets,
        actionText: "I'm ready to help!",
    }
    return(
        <View style={{width:"100%"}} >
                <Question question="Is it possible to add just one question?"
                        reply="Of course, here you have an example"
                        actionText="Sure! Take me there!" />

        </View>
    )
}