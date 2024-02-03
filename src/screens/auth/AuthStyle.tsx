import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";




const authstyles = StyleSheet.create({

    formControl: {
        width: "90%",
        backgroundColor: Colors.inputbg,
        marginVertical: 5,
        borderWidth: 0.5,
        borderColor: Colors.borderColor,
        borderRadius: 5,
        color: "#000",
        height: 44,
        paddingHorizontal:10,
    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 16,
        letterSpacing: -0.15000000596046448,
        textAlign: "center",
        color: Colors.textLight
    },
    textBold: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 16,
        letterSpacing: -0.15000000596046448,
        textAlign: "center",
        color: Colors.black,
    },
    forget: {
        color: Colors.primary,
        marginBottom: 30,
        marginTop:10,
        marginHorizontal: 20,
    },
    textLogo: {
        width: "90%",
        height: 52,
        marginVertical: 50,
    },
    line: {
        width: 120,
        height: 1,
        borderWidth: 0.33,
        borderColor: Colors.lineColor,
        marginTop: 7,
        marginHorizontal: 30,
    },
})

export { authstyles };