import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <div className={styles.statistics}>
            <h2>Statistics</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positiveFeedbackPercentage}%</p>
        </div>
    );
};

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Feedback;
