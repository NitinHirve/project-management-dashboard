import React from 'react';
import styled from 'styled-components';

const StyledTaskChip = styled.section`
display: flex; 
gap: 8px; 
align-items: center; 
padding: 11px; 
padding-top: 0;
${props => props.navigate && 'border-bottom: 2px solid #2B5CE6!important;'}
`;

const StyledTitle = styled.span`
letter-spacing: 0.14px;
`;

const StyledTotal = styled.span`
font-size: 10px; 
letter-spacing: 0.1px; 
display: flex; 
align-items: center; 
justify-content: center; 
padding: 4px; 
height: 18px; 
width: 18px; 
color: #2b5ce6; 
border-radius: 17px; 
background-color: rgba(43, 92, 230, 0.10);
`;


const PMTaskChip = ({ title, total, navigate }) => {
    return (
        <>
            <StyledTaskChip navigate={navigate}  >
                <StyledTitle >
                    {title}
                </StyledTitle>
                {
                    total &&
                    <StyledTotal >
                        {total}
                    </StyledTotal>
                }
            </StyledTaskChip>
        </>
    )
}

export default PMTaskChip