import React from 'react';
import { View } from '@ant-design/react-native';

interface StatusProps {
    status: string;
}

function SearchStatus(prop: StatusProps): JSX.Element {

    return <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 40
    }}>
        {prop.status}
    </View>;
}

export default React.memo(SearchStatus);