import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Appoinments from '../screens/appoinments';
import PatientDetails from '../screens/patientDetails';
import ScheduleAndCommunication from '../screens/scheduleCommunication';
import PaymentDetails from '../screens/paymentDetails';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Patient Details & Documents',
        }}
        name="patientDetails"
        component={PatientDetails}
      />
      <Tab.Screen
        options={{
          title: 'Schedule & Communication',
        }}
        name="schedule"
        component={ScheduleAndCommunication}
      />
      <Tab.Screen
        options={{
          title: 'Payment Details',
        }}
        name="paymentDetails"
        component={PaymentDetails}
      />
    </Tab.Navigator>
  );
}
