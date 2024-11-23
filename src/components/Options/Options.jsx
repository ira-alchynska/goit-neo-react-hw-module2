import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, totalFeedback, onReset }) => {
    return (
        <div>
            <button
                className={`${styles.button} ${styles.good}`}
                onClick={() => onLeaveFeedback('good')}
            >
                Good
            </button>
            <button
                className={`${styles.button} ${styles.neutral}`}
                onClick={() => onLeaveFeedback('neutral')}
            >
                Neutral
            </button>
            <button
                className={`${styles.button} ${styles.bad}`}
                onClick={() => onLeaveFeedback('bad')}
            >
                Bad
            </button>
            {totalFeedback > 0 && (
                <button
                    className={`${styles.button} ${styles.reset}`}
                    onClick={onReset}
                >
                    Reset
                </button>
            )}
        </div>
    );
};

Options.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default Options;
