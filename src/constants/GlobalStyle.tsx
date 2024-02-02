import Toast from "react-native-toast-message";
import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { ToastType } from "./AllTypes";



const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        fontFamily: "Roboto",
        backgroundColor: Colors.white,
    },
    verticalyCenter: {
        justifyContent: "center",
    },
    horizantalyCenter: {
        alignItems: "center",
    },
    flexEnd: {
        alignItems: "flex-end",
    },
    
})





const notify = (msg1: string, msg2: string, type?: ToastType): void => {
    switch (type) {
        case "success":
            Toast.show({
                type: 'success',
                text1: msg1,
                text2: msg2,
            });
            break;
        case "error":
            Toast.show({
                type: 'error',
                text1: msg1,
                text2: msg2,
            });
            break;
        case "info":
            Toast.show({
                type: 'info',
                text1: msg1,
                text2: msg2,
            });
            break;
        default:
            Toast.show({
                text1: msg1,
                text2: msg2,
            });
    }
};


export { styles,notify };