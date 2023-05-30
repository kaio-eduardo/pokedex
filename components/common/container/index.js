import { SafeAreaView } from "react-native-safe-area-context"
import { View } from "react-native"

const Container = ({ children, backColor = "", ph = 16 }) => {
    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: ph, backgroundColor: backColor }}>
                { children }
            </View>
        </SafeAreaView>
    )
}

export default Container