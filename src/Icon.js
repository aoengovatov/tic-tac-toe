import crossImage from './cross.png';
import zeroImage from './zero.png';
import styles from './icon.module.css';

const IconLayout = ({ src, style }) => <img className={style} src={src} alt="icon"></img>;

export const Icon = ({ icon }) => {
    switch (icon) {
        case 1:
            console.log('крестик');
            return <IconLayout src={crossImage} style={styles.imageCross} />;
        case -1:
            console.log('нолик');
            return <IconLayout src={zeroImage} style={styles.imageZero} />;
        default:
            return false;
    }
};
