import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const customStyles = StyleSheet.create({
    border: {
        borderWidth: 1.5,
        borderRadius: 100,
        borderColor: Colors.profileBorder,
        padding: 5,
    },
    profileImg: {
        width: 86,
        height: 86,
        borderRadius: 100,
    },
    bio: {
        width: "60%",
        marginVertical: 10,
    },
    textCenter: {
        textAlign: "center",
    },
    textBio: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 17,
        color:Colors.text,
    },
    textBold: {
        fontSize: 12,
        fontWeight: "bold",
        lineHeight: 14,
        color: Colors.textclr,
    },

    // modal styling
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        borderWidth: 2,
        marginVertical: 100,
        marginHorizontal: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 16,
        backgroundColor: Colors.primary,
        color: "#fff",
        padding: 10,
        borderRadius: 10,
    },
    fullScreenProfileImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
})
