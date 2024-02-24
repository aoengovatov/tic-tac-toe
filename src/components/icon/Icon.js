import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './icon.module.css';
import crossImage from '../../images/cross.png';
import zeroImage from '../../images/zero.png';

class IconLayout extends Component {
    render() {
        const { value } = this.props;

        return (
            <img
                className={styles.image}
                src={value === 'x' ? crossImage : value === 'o' ? zeroImage : ''}
                alt="icon"
                draggable={false}
            ></img>
        );
    }
}

export class Icon extends Component {
    render() {
        const { value } = this.props;
        return <IconLayout value={value} />;
    }
}

Icon.propTypes = {
    value: PropTypes.string,
};

IconLayout.propTypes = {
    value: PropTypes.string,
};
