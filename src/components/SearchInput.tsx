import React from 'react';
import { SearchBar } from '@ant-design/react-native';

interface InputProps {
    input: string;
    onInputChange: (input: string) => void;
}

function SearchInput(prop: InputProps): JSX.Element {

  return <SearchBar
    value={prop.input}
    placeholder="Search"
    placeholderTextColor="#473134"
    showCancelButton={false}
    cancelText=" "
    onChange={(value: any) => prop.onInputChange(value)}
    />;
}

export default React.memo(SearchInput);