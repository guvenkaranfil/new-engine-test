import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps, ViewProps, TextProps } from 'react-native'
import { Patient } from '../../../../icons'
import Fonts from '../../../helpers/Fonts'

import { ThemeContext } from '../../../../context';

interface IUserTypeButtonDesign {
    PatientIcon1Props?: any
    userTypeButton?: TouchableOpacityProps
    view1Props?: ViewProps
    view2Props?: ViewProps
    view3Props?: ViewProps
    text1Props?: TextProps & { label: string }
    text2Props?: TextProps & { label: string }
}

export default function UserTypeButtonDesign(props: IUserTypeButtonDesign) {
    const { theme } = useContext(ThemeContext);
    console.log("theme: ", theme)

    return (
        <TouchableOpacity>
            <>
                <View style={Themes.typeItem}>
                    <View {...props.view1Props}>
                        <Patient width={32} height={35}
                            {...props.PatientIcon1Props}
                        />
                    </View>

                    <View style={Themes.itemLblContainer}>
                        <Text
                        // style={[Themes.itemTitle, userType === 'patient' ? Themes.itemActive : null]}
                        >
                            I’m a patient {props.text1Props?.label}
                        </Text>
                        <Text style={Themes.itemInfo}>
                            Proin convallis libero ac nisl{props.text2Props?.label}
                        </Text>
                    </View>
                </View>
            </>
        </TouchableOpacity>
    )
}

// Theme context'den bağlanmış olucak
const Themes = StyleSheet.create({
    activeType: {
        backgroundColor: '#66CA98'
    },

    typeItem: {
        flexDirection: 'row',
        image: 'deneme.png',
    },

    itemLblContainer: {
        marginLeft: 18
    },

    itemTitle: {
        fontSize: 18,
        fontFamily: Fonts.interSemiBold,
        color: '#A7A6A5'
    },

    itemActive: {
        color: '#66CA98',
    },

    itemInfo: {
        paddingTop: 21,
        fontSize: 14,
        fontFamily: Fonts.interMedium,
        color: '#A7A6A5'
    },
})