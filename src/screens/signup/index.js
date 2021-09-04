import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import CustomButton from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/picker';
import CheckBoxx from '../../components/checkbox';
import {Colors} from '../../../utils/Constants';
import {register} from '../../config/firebase';
export default function SignUp({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [ gender,setGender] = useState("Male")
  const [state,setState] = useState('')
  const [emailError,setEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [ageError,setAgeError] = useState(false)
  const [stateEror,setStateError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)
  const codes =[
    {"name": "Afghanistan", "code": "AF"},
    {"name": "Åland Islands", "code": "AX"},
    {"name": "Albania", "code": "AL"},
    {"name": "Algeria", "code": "DZ"},
    {"name": "American Samoa", "code": "AS"},
    {"name": "AndorrA", "code": "AD"},
    {"name": "Angola", "code": "AO"},
    {"name": "Anguilla", "code": "AI"},
    {"name": "Antarctica", "code": "AQ"},
    {"name": "Antigua and Barbuda", "code": "AG"},
    {"name": "Argentina", "code": "AR"},
    {"name": "Armenia", "code": "AM"},
    {"name": "Aruba", "code": "AW"},
    {"name": "Australia", "code": "AU"},
    {"name": "Austria", "code": "AT"},
    {"name": "Azerbaijan", "code": "AZ"},
    {"name": "Bahamas", "code": "BS"},
    {"name": "Bahrain", "code": "BH"},
    {"name": "Bangladesh", "code": "BD"},
    {"name": "Barbados", "code": "BB"},
    {"name": "Belarus", "code": "BY"},
    {"name": "Belgium", "code": "BE"},
    {"name": "Belize", "code": "BZ"},
    {"name": "Benin", "code": "BJ"},
    {"name": "Bermuda", "code": "BM"},
    {"name": "Bhutan", "code": "BT"},
    {"name": "Bolivia", "code": "BO"},
    {"name": "Bosnia and Herzegovina", "code": "BA"},
    {"name": "Botswana", "code": "BW"},
    {"name": "Bouvet Island", "code": "BV"},
    {"name": "Brazil", "code": "BR"},
    {"name": "British Indian Ocean Territory", "code": "IO"},
    {"name": "Brunei Darussalam", "code": "BN"},
    {"name": "Bulgaria", "code": "BG"},
    {"name": "Burkina Faso", "code": "BF"},
    {"name": "Burundi", "code": "BI"},
    {"name": "Cambodia", "code": "KH"},
    {"name": "Cameroon", "code": "CM"},
    {"name": "Canada", "code": "CA"},
    {"name": "Cape Verde", "code": "CV"},
    {"name": "Cayman Islands", "code": "KY"},
    {"name": "Central African Republic", "code": "CF"},
    {"name": "Chad", "code": "TD"},
    {"name": "Chile", "code": "CL"},
    {"name": "China", "code": "CN"},
    {"name": "Christmas Island", "code": "CX"},
    {"name": "Cocos (Keeling) Islands", "code": "CC"},
    {"name": "Colombia", "code": "CO"},
    {"name": "Comoros", "code": "KM"},
    {"name": "Congo", "code": "CG"},
    {"name": "Congo, The Democratic Republic of the", "code": "CD"},
    {"name": "Cook Islands", "code": "CK"},
    {"name": "Costa Rica", "code": "CR"},
    {"name": "Croatia", "code": "HR"},
    {"name": "Cuba", "code": "CU"},
    {"name": "Cyprus", "code": "CY"},
    {"name": "Czech Republic", "code": "CZ"},
    {"name": "Denmark", "code": "DK"},
    {"name": "Djibouti", "code": "DJ"},
    {"name": "Dominica", "code": "DM"},
    {"name": "Dominican Republic", "code": "DO"},
    {"name": "Ecuador", "code": "EC"},
    {"name": "Egypt", "code": "EG"},
    {"name": "El Salvador", "code": "SV"},
    {"name": "Equatorial Guinea", "code": "GQ"},
    {"name": "Eritrea", "code": "ER"},
    {"name": "Estonia", "code": "EE"},
    {"name": "Ethiopia", "code": "ET"},
    {"name": "Falkland Islands (Malvinas)", "code": "FK"},
    {"name": "Faroe Islands", "code": "FO"},
    {"name": "Fiji", "code": "FJ"},
    {"name": "Finland", "code": "FI"},
    {"name": "France", "code": "FR"},
    {"name": "French Guiana", "code": "GF"},
    {"name": "French Polynesia", "code": "PF"},
    {"name": "French Southern Territories", "code": "TF"},
    {"name": "Gabon", "code": "GA"},
    {"name": "Gambia", "code": "GM"},
    {"name": "Georgia", "code": "GE"},
    {"name": "Germany", "code": "DE"},
    {"name": "Ghana", "code": "GH"},
    {"name": "Gibraltar", "code": "GI"},
    {"name": "Greece", "code": "GR"},
    {"name": "Greenland", "code": "GL"},
    {"name": "Grenada", "code": "GD"},
    {"name": "Guadeloupe", "code": "GP"},
    {"name": "Guam", "code": "GU"},
    {"name": "Guatemala", "code": "GT"},
    {"name": "Guernsey", "code": "GG"},
    {"name": "Guinea", "code": "GN"},
    {"name": "Guinea-Bissau", "code": "GW"},
    {"name": "Guyana", "code": "GY"},
    {"name": "Haiti", "code": "HT"},
    {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
    {"name": "Holy See (Vatican City State)", "code": "VA"},
    {"name": "Honduras", "code": "HN"},
    {"name": "Hong Kong", "code": "HK"},
    {"name": "Hungary", "code": "HU"},
    {"name": "Iceland", "code": "IS"},
    {"name": "India", "code": "IN"},
    {"name": "Indonesia", "code": "ID"},
    {"name": "Iran, Islamic Republic Of", "code": "IR"},
    {"name": "Iraq", "code": "IQ"},
    {"name": "Ireland", "code": "IE"},
    {"name": "Isle of Man", "code": "IM"},
    {"name": "Israel", "code": "IL"},
    {"name": "Italy", "code": "IT"},
    {"name": "Jamaica", "code": "JM"},
    {"name": "Japan", "code": "JP"},
    {"name": "Jersey", "code": "JE"},
    {"name": "Jordan", "code": "JO"},
    {"name": "Kazakhstan", "code": "KZ"},
    {"name": "Kenya", "code": "KE"},
    {"name": "Kiribati", "code": "KI"},
    {"name": "Korea, Republic of", "code": "KR"},
    {"name": "Kuwait", "code": "KW"},
    {"name": "Kyrgyzstan", "code": "KG"},
    {"name": "Latvia", "code": "LV"},
    {"name": "Lebanon", "code": "LB"},
    {"name": "Lesotho", "code": "LS"},
    {"name": "Liberia", "code": "LR"},
    {"name": "Libyan Arab Jamahiriya", "code": "LY"},
    {"name": "Liechtenstein", "code": "LI"},
    {"name": "Lithuania", "code": "LT"},
    {"name": "Luxembourg", "code": "LU"},
    {"name": "Macao", "code": "MO"},
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
    {"name": "Madagascar", "code": "MG"},
    {"name": "Malawi", "code": "MW"},
    {"name": "Malaysia", "code": "MY"},
    {"name": "Maldives", "code": "MV"},
    {"name": "Mali", "code": "ML"},
    {"name": "Malta", "code": "MT"},
    {"name": "Marshall Islands", "code": "MH"},
    {"name": "Martinique", "code": "MQ"},
    {"name": "Mauritania", "code": "MR"},
    {"name": "Mauritius", "code": "MU"},
    {"name": "Mayotte", "code": "YT"},
    {"name": "Mexico", "code": "MX"},
    {"name": "Micronesia, Federated States of", "code": "FM"},
    {"name": "Moldova, Republic of", "code": "MD"},
    {"name": "Monaco", "code": "MC"},
    {"name": "Mongolia", "code": "MN"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"},
    {"name": "Mozambique", "code": "MZ"},
    {"name": "Myanmar", "code": "MM"},
    {"name": "Namibia", "code": "NA"},
    {"name": "Nauru", "code": "NR"},
    {"name": "Nepal", "code": "NP"},
    {"name": "Netherlands", "code": "NL"},
    {"name": "Netherlands Antilles", "code": "AN"},
    {"name": "New Caledonia", "code": "NC"},
    {"name": "New Zealand", "code": "NZ"},
    {"name": "Nicaragua", "code": "NI"},
    {"name": "Niger", "code": "NE"},
    {"name": "Nigeria", "code": "NG"},
    {"name": "Niue", "code": "NU"},
    {"name": "Norfolk Island", "code": "NF"},
    {"name": "Northern Mariana Islands", "code": "MP"},
    {"name": "Norway", "code": "NO"},
    {"name": "Oman", "code": "OM"},
    {"name": "Pakistan", "code": "PK"},
    {"name": "Palau", "code": "PW"},
    {"name": "Palestinian Territory, Occupied", "code": "PS"},
    {"name": "Panama", "code": "PA"},
    {"name": "Papua New Guinea", "code": "PG"},
    {"name": "Paraguay", "code": "PY"},
    {"name": "Peru", "code": "PE"},
    {"name": "Philippines", "code": "PH"},
    {"name": "Pitcairn", "code": "PN"},
    {"name": "Poland", "code": "PL"},
    {"name": "Portugal", "code": "PT"},
    {"name": "Puerto Rico", "code": "PR"},
    {"name": "Qatar", "code": "QA"},
    {"name": "Reunion", "code": "RE"},
    {"name": "Romania", "code": "RO"},
    {"name": "Russian Federation", "code": "RU"},
    {"name": "RWANDA", "code": "RW"},
    {"name": "Saint Helena", "code": "SH"},
    {"name": "Saint Kitts and Nevis", "code": "KN"},
    {"name": "Saint Lucia", "code": "LC"},
    {"name": "Saint Pierre and Miquelon", "code": "PM"},
    {"name": "Saint Vincent and the Grenadines", "code": "VC"},
    {"name": "Samoa", "code": "WS"},
    {"name": "San Marino", "code": "SM"},
    {"name": "Sao Tome and Principe", "code": "ST"},
    {"name": "Saudi Arabia", "code": "SA"},
    {"name": "Senegal", "code": "SN"},
    {"name": "Serbia and Montenegro", "code": "CS"},
    {"name": "Seychelles", "code": "SC"},
    {"name": "Sierra Leone", "code": "SL"},
    {"name": "Singapore", "code": "SG"},
    {"name": "Slovakia", "code": "SK"},
    {"name": "Slovenia", "code": "SI"},
    {"name": "Solomon Islands", "code": "SB"},
    {"name": "Somalia", "code": "SO"},
    {"name": "South Africa", "code": "ZA"},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
    {"name": "Spain", "code": "ES"},
    {"name": "Sri Lanka", "code": "LK"},
    {"name": "Sudan", "code": "SD"},
    {"name": "Suriname", "code": "SR"},
    {"name": "Svalbard and Jan Mayen", "code": "SJ"},
    {"name": "Swaziland", "code": "SZ"},
    {"name": "Sweden", "code": "SE"},
    {"name": "Switzerland", "code": "CH"},
    {"name": "Syrian Arab Republic", "code": "SY"},
    {"name": "Taiwan, Province of China", "code": "TW"},
    {"name": "Tajikistan", "code": "TJ"},
    {"name": "Tanzania, United Republic of", "code": "TZ"},
    {"name": "Thailand", "code": "TH"},
    {"name": "Timor-Leste", "code": "TL"},
    {"name": "Togo", "code": "TG"},
    {"name": "Tokelau", "code": "TK"},
    {"name": "Tonga", "code": "TO"},
    {"name": "Trinidad and Tobago", "code": "TT"},
    {"name": "Tunisia", "code": "TN"},
    {"name": "Turkey", "code": "TR"},
    {"name": "Turkmenistan", "code": "TM"},
    {"name": "Turks and Caicos Islands", "code": "TC"},
    {"name": "Tuvalu", "code": "TV"},
    {"name": "Uganda", "code": "UG"},
    {"name": "Ukraine", "code": "UA"},
    {"name": "United Arab Emirates", "code": "AE"},
    {"name": "United Kingdom", "code": "GB"},
    {"name": "United States", "code": "US"},
    {"name": "United States Minor Outlying Islands", "code": "UM"},
    {"name": "Uruguay", "code": "UY"},
    {"name": "Uzbekistan", "code": "UZ"},
    {"name": "Vanuatu", "code": "VU"},
    {"name": "Venezuela", "code": "VE"},
    {"name": "Viet Nam", "code": "VN"},
    {"name": "Virgin Islands, British", "code": "VG"},
    {"name": "Virgin Islands, U.S.", "code": "VI"},
    {"name": "Wallis and Futuna", "code": "WF"},
    {"name": "Western Sahara", "code": "EH"},
    {"name": "Yemen", "code": "YE"},
    {"name": "Zambia", "code": "ZM"},
    {"name": "Zimbabwe", "code": "ZW"}
    ]
  const [country,setCountry] = useState('Select')
  const [selectedGender,setSelectedGender] = useState('Select')
  console.log("My Selected Gender ",selectedGender);
  const signUp = async () => {
    
    try {
      if (email && email.includes('@' && '.') && password.length >= 6 && name && password && age && state ){
        setShow(true);
      await register(email, password)
      setShow(false);
      alert('User registered Successfully');
      navigation.navigate('Login');
    }else{
      if(!name){
        setNameError(true)
      }
      if(!email || !email.includes('@'&&'.')){
        setEmailError(true)
      }
      if(!age || age.includes('.'||','||' ')){
        setAgeError(true)
      }
      if(!state || state==="State"){
        setStateError(true)
      }
      if(password.length<6 ){
        setPasswordError(true)
      }
    } 
    } catch (e) {
      console.log('register error--> ', e.message);
      setShow(false);
      const message = JSON.stringify(e.message)
      alert(message);
    }
  };
  function genderChange(value) {
    console.log(';;;',value)
      setSelectedGender(value)
  }
  function countryChange(value) {
    console.log(';;;',value)
    setCountry(value)
  }
  return (
    <SafeAreaView style={{flex: 1}}>
       <View style={style.logoContainer}>
              <Image
                style={style.logoStyle}
                source={require('../../../assets/images/logo.png')}
                resizeMode="contain"
              />
            </View>
      <ScrollView>
        <ScrollView contentContainerStyle={style.screenContainer}>
          <View style={style.ContentContainer}>
           

            <View style={style.signUpheading}>
              <Text style={style.signupTxt}>Signup</Text>
            </View>
            <View style={ style.formSec}>
              <View style={style.inpContainer}>
                <Input
                  onChangeText={val => {
                    setEmail(val);setEmailError(false)
                  }}
                  borderColor={emailError?"red": "#FFF"}
                  placeholder="Email*"
                />
               {emailError&&<Text style={{color:"red", paddingHorizontal:10}} >Please enter a valid email address</Text>}
              </View>

              <View style={style.inpContainer}>
                <Input placeholder="Name*"  onChangeText={val => {
                    setName(val);setNameError(false)
                  }}
                  borderColor={nameError?"red": "#FFF"}
                  />
              {nameError&&<Text style={{color:"red", paddingHorizontal:10}} >Please enter a valid name</Text>}

              </View>
              <View style={style.inpContainer}>
                <Input
                  secureTextEntry={true}
                  onChangeText={val => {
                    setPassword(val);setPasswordError(false)
                  }}
                  borderColor={passwordError?"red": "#FFF"}
                  placeholder="Password"
                />
                {passwordError&&<Text style={{color:"red", paddingHorizontal:10}} >Password must contain at least 6 characters</Text>}
              </View>

              <View style={style.inpContainer}>
                <Input onChangeText={(value)=>{setAge(value);setAgeError(false)}}  borderColor={ageError?"red": "#FFF"}keyboardType="numeric" placeholder="Age*" />
                {ageError&&<Text style={{color:"red", paddingHorizontal:10}} >Age must be a valid whole number</Text>}

              </View>

              <View style={style.inpContainer}>
                {/* <Input placeholder="    Sex" /> */}
                <Select
                  onValueChange={genderChange}
                pickerValue={selectedGender} list ={[{code:"Male"},{code:"Female"}]} borderColor="#FFF" label1="Male" label2="Female" />
              </View>
              <View style={style.inpContainer}  >
                <Select list={codes} borderColor={stateEror?"red":"#FFF"} onValueChange={countryChange} pickerValue={country} />
                {stateEror&&<Text style={{color:"red", paddingHorizontal:10}} >Please select a state</Text>}
              </View>
              <View style={style.inpContainer}>
                <Input borderColor={"#FFF"} placeholder="Serial Number" />
              </View>

              <View style={style.inpContainer2}>
                <CheckBoxx />
                <Text style={{paddingHorizontal:10, color:"#5f5f5f"}} >Agree to the terms of service</Text>
              </View>
              {/* <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                  <Text style={{padding:10, color:Colors.primaryColor}} >Already have an account ?</Text>
                </TouchableOpacity>
              </View> */}
              <View style={style.inpContainer}>
              <View style={{marginTop:20}} />
                <CustomButton loading={show} onPress={signUp} title="Sign Up" />
                <View style={{marginTop:20}} />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  ContentContainer: {
    // height: '100%',
    width: '85%',
    marginTop: 20,
  },
  screenContainer: {
    // height: '100%',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 11,
  },
  logoContainer: {
    marginTop:30,
    paddingHorizontal:25,
    // paddingVertical:10
  },
  signUpheading: {
    marginTop: 30,
    paddingHorizontal:5
  },
  signupTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: '._proxima-nova-bold-597278273b8ca',
  },
  inpContainer: {
    marginTop: 12,
    borderRadius:15
  },
  inpContainer2: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formSec: {
    marginTop: 40,
  },
  logoStyle: {
    width: "50%",
  },
});
