import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text, TextProps, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserTypeButton, { IUserTypeButton } from '../../scripts/components/UserTypeButton'
import Fonts from '../../../../helpers/Fonts'

interface IPage1Design {
    userTypeButton1: IUserTypeButton
    btn1Props?: PressableProps
    text1Pros?: TextProps & { label: string }
}

const Page1Design = (props: IPage1Design) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.infoContainer}>
            <Text style={styles.infoTitleLbl}>Let's get acquainted</Text>
            <Text style={styles.infoDescribeLbl}>Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet.</Text>
        </View>

        <View style={styles.userType}>

            <UserTypeButton
                {...props.userTypeButton1}
            />

            <Pressable style={styles.getStartBtn} {...props.btn1Props}>
                <Text>{props.text1Pros?.label ?? 'Default'}</Text>
            </Pressable>
        </View>
    </SafeAreaView>
)

// Theme context'den bağlanmış olucak
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        flex: 1,
        backgroundColor: '#F4F6F5'
    },

    mt74: { marginTop: 74 },

    infoContainer: {
        alignItems: 'center'
    },

    infoTitleLbl: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: Fonts.interSemiBold,
        color: '#1C1F1E',
    },

    infoDescribeLbl: {
        paddingTop: 13,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: Fonts.interMedium,
        color: '#A7A6A5'
    },

    logoContainer: {
        marginTop: 30,
        marginBottom: 60,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },

    logo: {
        width: 32,
        height: 32,
    },

    userType: {
        marginTop: 100,
        flex: 1,
    },

    typeItem: {
        flexDirection: 'row',
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

    rectangle: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
    },

    activeType: {
        backgroundColor: '#66CA98'
    },

    footer: {
        height: 100,
    },

    getStartBtn: {
        marginTop: 35,
        width: 200,
        height: 50,
        borderRadius: 18,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CA98'
    },

    getStartLbl: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})



export default Page1Design