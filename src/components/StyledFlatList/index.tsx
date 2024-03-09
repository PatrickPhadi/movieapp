import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheetProperties } from 'react-native';

interface IFlatList {
    data: any[];
    numColumns?: number;
    horizontal?: boolean;
    style?: StyleSheetProperties;
    renderItem: ({ item }: { item: any }) => ReactElement;
}

const StyledFlatList = ({
    data,
    horizontal,
    renderItem,
    numColumns
}: IFlatList) => {
    return (
        <FlatList
            data={data}
            numColumns={numColumns}
            horizontal={horizontal}
            style={{ paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ alignItems: "center", justifyContent: "space-between" }}
            {...((numColumns && numColumns > 1) && { columnWrapperStyle: { justifyContent: "space-around" } })}
        />
    )
}

StyledFlatList.propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    horizontal: PropTypes.bool,
    numColumns: PropTypes.number,
};

export default StyledFlatList