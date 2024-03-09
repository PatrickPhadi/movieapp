import React from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./style";
import { colors } from '../../shared/assets/theme';

interface ITextInput {
    label: string;
    disabled?: boolean;
    value: string;
    onTouch?: () => void;
    style?: object;
    searching?: boolean;
    onChangeText: (value: string) => void;
}

const StyledTextInput = ({
    label,
    disabled,
    value,
    onTouch,
    style,
    searching,
    onChangeText,
}: ITextInput) => {

    return (
        <React.Fragment>
            <View style={[styles.container, style]}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        key={label}
                        value={value}
                        editable={!disabled}
                        placeholder={label}
                        style={styles.containedInput}
                        onSubmitEditing={() => { }}
                        onTouchStart={onTouch}
                        keyboardType="default"
                        returnKeyType="done"
                        onChangeText={e => onChangeText(e)}
                    />
                    {searching && <View style={{ position: "absolute", right: 0, marginTop: 14, marginRight: 10 }}>
                        <ActivityIndicator color={colors.primary} />
                    </View>}
                </View>
            </View>
        </React.Fragment>
    );
};

StyledTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    onTouch: PropTypes.func
};

export default React.memo(StyledTextInput);
