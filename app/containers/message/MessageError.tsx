import React, { useContext } from 'react';

import Touchable from './Touchable';
import { CustomIcon } from '../../lib/Icons';
import styles from './styles';
import { BUTTON_HIT_SLOP } from './utils';
import { themes } from '../../constants/colors';
import MessageContext from './Context';

interface IMessageError {
	hasError: boolean;
	theme: string;
}

const MessageError = React.memo(
	({ hasError, theme }: IMessageError) => {
		if (!hasError) {
			return null;
		}
		const { onErrorPress } = useContext(MessageContext);
		return (
			<Touchable onPress={onErrorPress} style={styles.errorButton} hitSlop={BUTTON_HIT_SLOP}>
				<CustomIcon name='warning' color={themes[theme].dangerColor} size={18} />
			</Touchable>
		);
	},
	(prevProps, nextProps) => prevProps.hasError === nextProps.hasError && prevProps.theme === nextProps.theme
);

MessageError.displayName = 'MessageError';

export default MessageError;
