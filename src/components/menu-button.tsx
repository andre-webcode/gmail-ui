import { Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from "@/styles/colors";

export function MenuButton(){
    return(
        <Pressable>
            <MaterialIcons name="email" size={22} color={colors.white}/>
        </Pressable>

    )
}