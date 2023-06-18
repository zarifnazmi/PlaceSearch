import React from 'react';
import { ActivityIndicator } from '@ant-design/react-native';

function ToastLoader(): JSX.Element {

    return <ActivityIndicator
        toast
        size="large"
        text="Loading..."
    />;
}

export default React.memo(ToastLoader);