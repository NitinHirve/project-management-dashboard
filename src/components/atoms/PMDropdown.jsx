import React from 'react'
import { ReactComponent as ArrowDown } from '../../core/assets/Dashboard/header/arrowDown.svg'
import styled from 'styled-components'

const StyledDropdown = styled.div`
  width: auto;
  height: 34px;
  display: flex;
  gap: 12px;
  align-items: center; 
  padding: 2px 14px;
  background-color: #fff; border-radius: 17px;
  cursor: pointer
`;

const StyledTitle = styled.span`

  color:#060606;
  font-size:14px;
  letter-spacing:0.14px;
  font-weight:400;
`;

const PMDropdown = ({ title }) => {
    return (
        <>
            <StyledDropdown>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <ArrowDown />
            </StyledDropdown>
        </>
    )
}

export default PMDropdown