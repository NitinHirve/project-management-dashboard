import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import styles from '../../styles/atoms/PMCircularProgressBar.module.css'

const dashOffsetAnimation = (initialOffset, finalOffset) => keyframes`
  100% {
    stroke-dashoffset: ${finalOffset}
  }
`;

const AnimatedCircle = styled.circle`
  fill: none;
  stroke:  ${props => props.color};
  stroke-width: 3px;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
  animation: ${props => dashOffsetAnimation(180, props.dashOffset)} 2s linear forwards;
`;

const PMCircularProgressBar = ({ percentFinalValue, status }) => {

    let color;

    switch (status) {
        case 'Completed':
            color = '#1A932E';
            break;
        case 'Delayed':
            color = '#DFA510';
            break;
        case 'At risk':
            color = '#EE201C';
            break;
        case 'On going':
            color = '#E65F2B';
            break;
        default:
            color = '#1A932E';
    }

    const [percentage, setPercentage] = useState(0)
    const dashOffset = 180 - 80 * (percentFinalValue * 0.01)

    useEffect(() => {
        let intervalId;

        const updatePercentage = () => {
            setPercentage((prevPercentage) => {
                if (prevPercentage < percentFinalValue) {
                    return prevPercentage + 1;
                } else {
                    clearInterval(intervalId);
                    return prevPercentage;
                }
            });
        };

        intervalId = setInterval(updatePercentage, 10);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className={styles.skill}>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div id={styles.number}>
                            {percentage + '%'}
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                    </defs>
                    <AnimatedCircle dashOffset={dashOffset} color={color} cx="16" cy="16" r="13" stroke-linecap="round" />
                </svg>
            </div>
        </>
    )
}

export default PMCircularProgressBar