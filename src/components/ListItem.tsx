import React from 'react';
import { List } from '@ant-design/react-native';
import { Keyboard } from 'react-native';

interface ListProps {
    places: any;
    onSelect: (input: string) => void;
    saveToMarker: (placeId: string) => void;
}

function ListItem(prop: ListProps): JSX.Element {

    return <List>
        {prop.places.map((item: any, index: number) => (
            <List.Item
                key={index}
                onPress={() => {
                    prop.onSelect(item.description)
                    prop.saveToMarker(item.place_id)
                    Keyboard.dismiss();
                }}
            >
                {item.description}
            </List.Item>
        ))}
    </List>;
}

export default React.memo(ListItem);