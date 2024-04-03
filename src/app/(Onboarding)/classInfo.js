import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import stylesClassInfo from '../../styles/stylesClassInfo';

// Class list with placeholders
const CLASSES = [
    { label: 'Biology', value: '1' },
    { label: 'Computer Science', value: '2' },
    { label: 'Electrical Engineering', value: '3' },
    { label: 'Accouting', value: '4' },
    { label: 'Finance', value: '5' },
    { label: 'Eduaction', value: '6' },
    { label: 'Physics', value: '7' },
    { label: 'Political Science', value: '8' },
];

// CRN list with placeholders
const CRNS = [
    { label: '12345', value: '1' },
    { label: '23456', value: '2' },
    { label: '34567', value: '3' },
    { label: '45678', value: '4' },
    { label: '56789', value: '5' },
];

// Building list with placeholders
const BUILDINGS = [
    { label: 'Lecture Hall', value: '1' },
    { label: 'Academic Building A', value: '2' },
    { label: 'Science I', value: '3' },
];

// Room list with placeholders
const ROOMS = [
    { label: 'Room 101', value: '1' },
    { label: 'Room 102', value: '2' },
    { label: 'Room 103', value: '3' },
];

// Date list with placeholders
const DATES = [
    { label: 'M W F', value: '1' },
    { label: 'T TH', value: '2' },
];

// Time list with placeholders
const TIMES = [
    { label: '09:00 AM', value: '1' },
    { label: '10:00 AM', value: '2' },
    { label: '11:00 AM', value: '3' },
];

const classInfo = () => {
    // State for class dropdown
    const [classValue, setClassValue] = useState(null);
    // State for CRN dropdown
    const [crnValue, setCrnValue] = useState(null);
    // State for building dropdown
    const [buildingValue, setBuildingValue] = useState(null);
    // State for room dropdown
    const [roomValue, setRoomValue] = useState(null);
    // State for date dropdown
    const [dateValue, setDateValue] = useState(null);
    // State for time dropdown
    const [timeValue, setTimeValue] = useState(null);

    const [isClassFocus, setIsClassFocus] = useState(false);
    const [isCrnFocus, setIsCrnFocus] = useState(false);
    const [isBuildingFocus, setIsBuildingFocus] = useState(false);
    const [isRoomFocus, setIsRoomFocus] = useState(false);
    const [isDateFocus, setIsDateFocus] = useState(false);
    const [isTimeFocus, setIsTimeFocus] = useState(false);

    // Blank handle for the skip button
    const handleSkip = () => {
        console.log('Next button pressed');
    };

    return (
        <SafeAreaView>
            <View style={stylesClassInfo.container}>
                <View style={{ flex: 1 }}>
                    <Text style={[stylesClassInfo.label]}>Set Up Your Schedule</Text>
                    <Dropdown
                        style={[stylesClassInfo.dropdown]}
                        placeholderStyle={stylesClassInfo.placeholderStyle}
                        selectedTextStyle={stylesClassInfo.selectedTextStyle}
                        inputSearchStyle={stylesClassInfo.inputSearchStyle}
                        data={CLASSES}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isClassFocus ? ' Class' : '...'}
                        searchPlaceholder="Search..."
                        value={classValue}
                        onFocus={() => setIsClassFocus(true)}
                        onBlur={() => setIsClassFocus(false)}
                        onChange={(item) => {
                            setClassValue(item.value);
                            setIsClassFocus(false);
                        }}
                    />
                    <Dropdown
                        style={[stylesClassInfo.dropdown]}
                        placeholderStyle={stylesClassInfo.placeholderStyle}
                        selectedTextStyle={stylesClassInfo.selectedTextStyle}
                        inputSearchStyle={stylesClassInfo.inputSearchStyle}
                        data={CRNS}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isCrnFocus ? ' CRN' : '...'}
                        searchPlaceholder="Search..."
                        value={crnValue}
                        onFocus={() => setIsCrnFocus(true)}
                        onBlur={() => setIsCrnFocus(false)}
                        onChange={(item) => {
                            setCrnValue(item.value);
                            setIsCrnFocus(false);
                        }}
                    />
                    <Dropdown
                        style={[stylesClassInfo.dropdown]}
                        placeholderStyle={stylesClassInfo.placeholderStyle}
                        selectedTextStyle={stylesClassInfo.selectedTextStyle}
                        inputSearchStyle={stylesClassInfo.inputSearchStyle}
                        data={BUILDINGS}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isBuildingFocus ? 'Building' : '...'}
                        searchPlaceholder="Search..."
                        value={buildingValue}
                        onFocus={() => setIsBuildingFocus(true)}
                        onBlur={() => setIsBuildingFocus(false)}
                        onChange={(item) => {
                        setBuildingValue(item.value);
                        setIsBuildingFocus(false);
                    }}
                    />
                    <Dropdown
                        style={[stylesClassInfo.dropdown]}
                        placeholderStyle={stylesClassInfo.placeholderStyle}
                        selectedTextStyle={stylesClassInfo.selectedTextStyle}
                        inputSearchStyle={stylesClassInfo.inputSearchStyle}
                        data={ROOMS}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isRoomFocus ? 'Room' : '...'}
                        searchPlaceholder="Search..."
                        value={roomValue}
                        onFocus={() => setIsRoomFocus(true)}
                        onBlur={() => setIsRoomFocus(false)}
                        onChange={(item) => {
                        setRoomValue(item.value);
                        setIsRoomFocus(false);
                    }}
                    />
                    <Dropdown
                        style={[stylesClassInfo.dropdown]}
                        placeholderStyle={stylesClassInfo.placeholderStyle}
                        selectedTextStyle={stylesClassInfo.selectedTextStyle}
                        inputSearchStyle={stylesClassInfo.inputSearchStyle}
                        data={DATES}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isDateFocus ? 'Date' : '...'}
                        searchPlaceholder="Search..."
                        value={dateValue}
                        onFocus={() => setIsDateFocus(true)}
                        onBlur={() => setIsDateFocus(false)}
                        onChange={(item) => {
                        setDateValue(item.value);
                        setIsDateFocus(false);
                    }}
                    />
                    <Dropdown
                        style={[stylesClassInfo.dropdown]}
                        placeholderStyle={stylesClassInfo.placeholderStyle}
                        selectedTextStyle={stylesClassInfo.selectedTextStyle}
                        inputSearchStyle={stylesClassInfo.inputSearchStyle}
                        data={TIMES}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isTimeFocus ? 'Time' : '...'}
                        searchPlaceholder="Search..."
                        value={timeValue}
                        onFocus={() => setIsTimeFocus(true)}
                        onBlur={() => setIsTimeFocus(false)}
                        onChange={(item) => {
                        setTimeValue(item.value);
                        setIsTimeFocus(false);
                    }}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleSkip}
                        style={stylesClassInfo.nextButton}
                        >
                        <Text style={stylesClassInfo.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        );
};

export default classInfo;
