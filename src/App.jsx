import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';
import './App.css';

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedFeedback = JSON.parse(localStorage.getItem('feedback')) || {
            good: 0,
            neutral: 0,
            bad: 0,
        };

        setFeedback(savedFeedback);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('feedback', JSON.stringify(feedback));
        }
    }, [feedback, isInitialized]);

    const updateFeedback = (feedbackType) => {
        setFeedback((prevState) => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedbackPercentage =
        totalFeedback > 0
            ? Math.round((feedback.good / totalFeedback) * 100)
            : 0;

    return (
        <div className="wrapper">
            <Description />
            <Options
                onLeaveFeedback={updateFeedback}
                totalFeedback={totalFeedback}
                onReset={resetFeedback}
            />
            {totalFeedback > 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedbackPercentage={positiveFeedbackPercentage}
                />
            ) : (
                <Notification message="No feedback given yet." />
            )}
        </div>
    );
};

export default App;
