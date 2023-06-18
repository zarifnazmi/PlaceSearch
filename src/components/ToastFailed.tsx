import React from 'react';
import { Toast } from '@ant-design/react-native';

interface ToastProps {
    content: string;
}

function ToastFailed(prop: ToastProps): JSX.Element {

    Toast.fail({
        content: prop.content,
        duration: 5,
        stackable: true,
      });

    return <></>
}

export default React.memo(ToastFailed);