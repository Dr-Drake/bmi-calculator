import { StatusBar, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const MainLayout: React.FC<any> = ({ children })=>{

    const insets = useSafeAreaInsets();

    let safeAreaStyle: StyleProp<ViewStyle> = {
        // paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
    }

    return(
        <View style={[styles.container, safeAreaStyle]}>
            <StatusBar barStyle="light-content" backgroundColor="white" />
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#080A1C",
      flex: 1
    },
});

export default MainLayout;