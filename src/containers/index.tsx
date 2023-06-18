import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import {
    Provider,
} from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import { InputContainer } from './InputContainer';
import { ViewContainer } from './ViewContainer';

function AppContainer(): JSX.Element {

    return (
        <Provider locale={enUS}>
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
                <ViewContainer />
                <InputContainer />
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFFFFF',
    },
});

export default AppContainer;
