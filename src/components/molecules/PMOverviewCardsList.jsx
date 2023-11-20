import React from 'react'
import PMOverviewCard from '../atoms/PMOverviewCard'
import styled from 'styled-components'

import { ReactComponent as FirstCardIcon } from '../../core/assets/Dashboard/overview/firstCardIcon.svg'
import { ReactComponent as SecondCardIcon } from '../../core/assets/Dashboard/overview/secondCardIcon.svg'
import { ReactComponent as ThirdCardIcon } from '../../core/assets/Dashboard/overview/thirdCardIcon.svg'
import { ReactComponent as FourthCardIcon } from '../../core/assets/Dashboard/overview/fourthCardIcon.svg'

import { ReactComponent as RedArrowIcon } from '../../core/assets/Dashboard/overview/redArrow.svg'
import { ReactComponent as GreenArrowIcon } from '../../core/assets/Dashboard/overview/greenArrow.svg'

const StylesOverviewCardsList = styled.section`
display: flex;
gap: 16px
`;


const overviewCards = [
    {
        icon: <FirstCardIcon />,
        iconColor: '#D398E7',
        title: 'Total revenue',
        value: '$53,00989',
        arrow: <GreenArrowIcon />,
        status: '12% increase from last month'
    },
    {
        icon: <SecondCardIcon />,
        iconColor: '#E89271',
        title: 'Projects',
        value: '95 /100',
        arrow: <RedArrowIcon />,
        status: '10% decrease from last month'
    },
    {
        icon: <ThirdCardIcon />,
        iconColor: '#70A1E5',
        title: 'Time spent',
        value: '1022 /1300 Hrs',
        arrow: <GreenArrowIcon />,
        status: '8% increase from last month'
    },
    {
        icon: <FourthCardIcon />,
        iconColor: '#F0C274',
        title: 'Resources',
        value: '101 /120',
        arrow: <GreenArrowIcon />,
        status: '2% increase from last month'
    }
]


const PMOverviewCardsList = () => {
    return (
        <>
            <StylesOverviewCardsList >
                {
                    overviewCards.length > 0 && (
                        overviewCards.map(cardDetails => (
                            <>
                                <PMOverviewCard cardDetails={cardDetails} />
                            </>
                        ))
                    )
                }
            </StylesOverviewCardsList>

        </>
    )
}

export default PMOverviewCardsList