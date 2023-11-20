import React from 'react'
import PMHeader from '../../molecules/PMHeader'
import PMOverview from '../../organisms/PMOverview'
import PMProjectSummary from '../../organisms/PMProjectSummary'
import PMTodayTask from '../../organisms/PMTodayTask'
import styled from 'styled-components';

const StyledDashboard = styled.div`
height:100%;
flex:1;
background-color:#EBDFD7;
padding:0px 30px;
`;


const Dashboard = () => {
    return (
        <>
            <StyledDashboard >
                <PMHeader />
                <PMOverview />
                <PMProjectSummary />
                <PMTodayTask />
            </StyledDashboard>
        </>
    )
}

export default Dashboard