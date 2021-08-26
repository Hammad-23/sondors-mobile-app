import React from 'react';
import {View,Text} from 'react-native';
import {FAQ} from 'react-native-faq'


export default function FaQ(){
    const questions = [{
        question: "How can I help you?",
             reply: "You have several options to choose:",
            //  bullets: bullets,
             actionText: "I'm ready to help!",
            //  onClick: action_example
      }]
    return(
        <>

            <FAQ questions={questions} />

        </>
    )
}