import React from 'react';
import { View, ActivityIndicator } from '@ant-design/react-native';

function Loader(): JSX.Element {

    return <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#FFFFFF',
    }}>
        <ActivityIndicator color="#473134" size="large" />
    </View>;
}

export default React.memo(Loader);