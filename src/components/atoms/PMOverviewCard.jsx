import React from 'react'
import styles from '../../styles/atoms/PMOverviewCard.module.css'


const PMOverviewCard = ({ cardDetails }) => {

    let firstValue;
    let secondValue;

    if (cardDetails.title !== 'Total revenue') {
        const valueArray = cardDetails.value.split('/')
        firstValue = valueArray[0]
        secondValue = '/' + valueArray[1]
    }

    return (
        <>
            <section className={styles.card}>
                <div className={styles.card_icon} style={{ background: cardDetails.iconColor }}>
                    {cardDetails.icon}
                </div>
                <span className={styles.card_title}>
                    {cardDetails.title}
                </span>
                {
                    !secondValue &&
                    <span className={styles.card_value} >
                        {cardDetails.value}
                    </span>
                }
                {
                    secondValue &&
                    <span className={styles.card_value} >
                        {firstValue}
                        <span className={styles.card_second_value}>
                            {secondValue}
                        </span>
                    </span>
                }
                <section className={styles.card_arrow} >
                    {cardDetails.arrow}
                    <span className={styles.card_status} >
                        {cardDetails.status}
                    </span>
                </section>
            </section>
        </>
    )
}

export default PMOverviewCard