import React from 'react'
import styled from 'styled-components'

import PMDropdown from '../atoms/PMDropdown'
import PMOverviewCardsList from '../molecules/PMOverviewCardsList'

const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const StyledOverviewHeader = styled.section`
  margin-top: 20px; 
  display: flex; 
  align-items: center; 
  justify-content: space-between
`;

const StyledOverviewTitle = styled.div`
  color: #060606;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.22px
`;


const PMOverview = () => {
    return (
        <>
            <StyledOverview >
                <StyledOverviewHeader >
                    <StyledOverviewTitle >
                        Overview
                    </StyledOverviewTitle>
                    <PMDropdown title={'Last 30 days'} />
                </StyledOverviewHeader>
                <PMOverviewCardsList />
            </StyledOverview>

        </>
    )
}

export default PMOverview