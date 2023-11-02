import PropTypes from 'prop-types';
import styles from './icon.module.css';
import crossImage from '../../images/cross.png';
import zeroImage from '../../images/zero.png';

const IconLayout = ({ value }) => (
    <img
        className={styles.image}
        src={value === 'x' ? crossImage : value === 'o' ? zeroImage : ''}
        alt="icon"
        draggable={false}
    ></img>
);

export const Icon = ({ value }) => {
    return <IconLayout value={value} />;
};

Icon.propTypes = {
    value: PropTypes.string,
};

IconLayout.propTypes = {
    value: PropTypes.string,
};
