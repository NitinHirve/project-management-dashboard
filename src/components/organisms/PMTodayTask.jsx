import React from 'react'
import styles from '../../styles/organisms/PMTodayTask.module.css'

import { ReactComponent as HeaderBottomLine } from '../../core/assets/Dashboard/header/headerBottomLine.svg'
import { ReactComponent as TaskTickIcon } from '../../core/assets/Dashboard/common/taskTickIcon.svg'
import { ReactComponent as TaskBlankIcon } from '../../core/assets/Dashboard/common/taskBlankIcon.svg'

import PRChip from '../atoms/PMChip'
import PMTaskChip from '../atoms/PMTaskChip'

const todayTasksDetails = [
    {
        status: <PRChip title={'Approved'} />,
        title: 'Create a user flow of social application design',
        icon: <TaskTickIcon />,
    },
    {
        status: <PRChip title={'In review'} />,
        title: 'Create a user flow of social application design',
        icon: <TaskTickIcon />,
    },
    {
        status: <PRChip title={'In review'} />,
        title: 'Landing page design for Fintech project of singapore',
        icon: <TaskTickIcon />,
    },
    {
        status: <PRChip title={'On going'} />,
        title: 'Interactive prototype for app screens of deltamine project',
        icon: <TaskBlankIcon />,
    },
    {
        status: <PRChip title={'Approved'} />,
        title: 'Interactive prototype for app screens of deltamine project',
        icon: <TaskTickIcon />,
    }
]

const PMTodayTask = () => {
    return (
        <>
            <section className={styles.task} >
                <span className={styles.task_title} >
                    Today task
                </span>

                <section className={styles.task_links} >

                    <PMTaskChip title={'All'} total={10} />
                    <PMTaskChip title={'Important'} navigate={true} />
                    <PMTaskChip title={'Notes'} total={'05'} />
                    <PMTaskChip title={'Links'} total={10} />

                </section>

                <section style={{ marginTop: '14px' }}>
                    {
                        todayTasksDetails.length > 0 && (
                            todayTasksDetails.map(todayTask => (
                                <>
                                    <section className={styles.task_taskDetails} >
                                        <section className={styles.task_icon} >
                                            {todayTask.icon}
                                            <span className={styles.task_list_title} >
                                                {todayTask.title}
                                            </span>
                                        </section>
                                        <span className={styles.task_status} >
                                            {todayTask.status}
                                        </span>
                                    </section>
                                </>
                            ))
                        )
                    }

                </section>

            </section>



        </>
    )
}

export default PMTodayTask