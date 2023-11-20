import React from 'react'

import styled from 'styled-components';


const MyChip = styled.div`
   width:max-content;
   display:flex;
   align-items:center;
   font-size:12px;
   letter-spacing:0.12px;
   padding:5px 8px;
   height:24px;
   border-radius:20px;
   background-color:${props => props.backgroundColor};
   color:${props => props.color};
`;

const PMChip = ({ title }) => {

    let backgroundColor;
    let color;

    switch (title) {
        case 'Completed':
            backgroundColor = 'rgba(26, 147, 46, 0.18)';
            color = '#1A932E';
            break;
        case 'Delayed':
            backgroundColor = 'rgba(226, 177, 51, 0.18)';
            color = '#DFA510';
            break;
        case 'At risk':
            backgroundColor = 'rgba(238, 32, 28, 0.18)';
            color = '#EE201C';
            break;
        case 'On going':
            backgroundColor = 'rgba(230, 95, 43, 0.18)';
            color = '#E65F2B';
            break;
        case 'Approved':
            backgroundColor = 'rgba(26, 147, 46, 0.18)';
            color = '#1A932E';
            break;
        case 'In review':
            backgroundColor = 'rgba(238, 32, 28, 0.18)';
            color = '#EE201C';
            break;
        default:
            backgroundColor = 'rgba(26, 147, 46, 0.18)';
            color = '#1A932E';
    }
    return (
        <>
            <MyChip backgroundColor={backgroundColor} color={color} >
                {title}
            </MyChip>
        </>
    )
}

export default PMChip