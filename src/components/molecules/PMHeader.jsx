import React from 'react'
import styles from '../../styles/molecules/PMHeader.module.css'

import { ReactComponent as HeaderBottomLine } from '../.././core/assets/Dashboard/header/headerBottomLine.svg'
import { ReactComponent as NotificationRingIcon } from '../.././core/assets/Dashboard/header/notificationRingIcon.svg'
import { ReactComponent as ArrowDown } from '../.././core/assets/Dashboard/header/arrowDown.svg'
import { ReactComponent as SearchIcon } from '../.././core/assets/Dashboard/header/searchIcon.svg'
import AlexImg from '../.././core/assets/Dashboard/header/AlexImg.png'

const PMHeader = () => {
    return (
        <>
            <div className={styles.header} >
                <section className={styles.header_section_one} >
                    <div className={styles.header_title} >
                        Dashboard
                    </div>
                    <section className={styles.header_section_two} >
                        <div className={styles.header_searchbar}>
                            <SearchIcon />
                            <span className={styles.header_searchbar_placeholder} >
                                Search for anything...
                            </span>
                        </div>
                        <div className={styles.header_notification} >
                            {<NotificationRingIcon color='black' />}
                        </div>
                        <section className={styles.header_section_three} >
                            <img className={styles.header_profile_photo} alt="dp" src={AlexImg} />
                            <section className={styles.header_section_four} >
                                <section className={styles.header_section_five} >
                                    <span className={styles.header_profile_name} >
                                        Alex meian
                                    </span>
                                    <span className={styles.header_profile_designation} >
                                        Product manager
                                    </span>
                                </section>
                                <ArrowDown style={{ cursor: 'pointer' }} />
                            </section>
                        </section>
                    </section>
                </section>

                {/* footerLine  */}
                <div className={styles.header_baseline} >{<HeaderBottomLine width='100%' />}</div>
            </div>
        </>
    )
}

export default PMHeader