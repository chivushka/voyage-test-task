import React, { ReactNode, useState } from 'react';

import DropDownArrowIcon from '../../../Assets/images/svg/Arrow';

import { ScrollView, TouchableOpacity, View, ViewProps } from 'react-native';
import TextC from '../TextComponent';
import { styles } from './styles';

interface Props<Option> extends ViewProps {
    options: Option[];

    selectedOptions: Option[];
    onSelect: (values: Option[]) => void;

    renderName: (option: Option, selected: boolean) => ReactNode | string;
    renderTitle: () => ReactNode | string;

    idKey: keyof Option;
}

export const MultiSelector = <Option,>({
    idKey,
    onSelect,
    options,
    renderName,
    selectedOptions,
    renderTitle,
    ...rest
}: Props<Option>) => {
    const [isOpened, setIsOpened] = useState(false);


    const _onSelect = (item: Option) => () => {
        const arr = selectedOptions || []

        const index = arr.findIndex((selectedItem) => selectedItem[idKey] === item[idKey]);

        if (index === -1) {
            return onSelect([...arr, item])
        }

        onSelect([...arr.slice(0, index), ...arr.slice(index + 1)])
    }


    return (
        <View {...rest}>
            <TouchableOpacity
                onPress={() => setIsOpened(!isOpened)}
                activeOpacity={0.6}
                style={styles.field}>
                {renderTitle()}

                <DropDownArrowIcon
                    style={isOpened ? { marginBottom: 15, marginLeft: 8 } : { marginTop: 15, marginLeft: 8 }}
                    angle={isOpened ? -90 : 90}
                    height={20}
                    width={24}
                />
            </TouchableOpacity>

            {isOpened && (
                <View style={styles.options}>
                    <ScrollView style={{ flex: 1 }}>
                        {options.map(item => (
                            <TouchableOpacity onPress={_onSelect(item)} activeOpacity={0.6} style={styles.option} key={item[idKey] as string}>
                                {renderName(item, false)}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};
