import React from 'react'
import styles from '../../styles/organisms/PMProjectSummary.module.css'

import PMDropdown from '../atoms/PMDropdown'
import PMChip from '../atoms/PMChip'
import PMCircularProgressBar from '../atoms/PMCircularProgressBar'

const projectSummaryDetails = [
    {
        name: 'Nelsa web developement',
        projectManager: 'Om prakash sao',
        dueDate: 'May 25, 2023',
        status: <PMChip title={'Completed'} />,
        progress: <PMCircularProgressBar percentFinalValue={100} status={'Completed'} />
    },
    {
        name: 'Datascale AI app ',
        projectManager: 'Neilsan mando',
        dueDate: 'Jun 20, 2023',
        status: <PMChip title={'Delayed'} />,
        progress: <PMCircularProgressBar percentFinalValue={35} status={'Delayed'} />
    },
    {
        name: 'Media channel branding',
        projectManager: 'Tiruvelly priya',
        dueDate: 'July 13, 2023',
        status: <PMChip title={'At risk'} />,
        progress: <PMCircularProgressBar percentFinalValue={68} status={'At risk'} />
    },
    {
        name: 'Corlax iOS app develpoement',
        projectManager: 'Matte hannery',
        dueDate: 'May',
        status: <PMChip title={'Completed'} />,
        progress: <PMCircularProgressBar percentFinalValue={100} status={'Completed'} />
    },
    {
        name: 'Website builder developement',
        projectManager: 'Sukumar rao',
        dueDate: 'Mar 15, 2024',
        status: <PMChip title={'On going'} />,
        progress: <PMCircularProgressBar percentFinalValue={50} status={'On going'} />
    },
]

const PMProjectSummary = () => {
    return (
        <>
            <section className={styles.summary} >
                <section className={styles.summary_header} >
                    <span className={styles.summary_title} >Project summary</span>
                    <section className={styles.summary_dropdowns} >
                        <PMDropdown title={'Project'} />
                        <PMDropdown title={'Project manager'} />
                        <PMDropdown title={'Status'} />
                    </section>
                </section>
                <table className={styles.summary_table} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Project manager</th>
                            <th>Due date</th>
                            <th>Status</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projectSummaryDetails.length > 0 && (
                                projectSummaryDetails.map(projectSummary => (
                                    <>
                                        <tr>
                                            <td>{projectSummary.name}</td>
                                            <td>{projectSummary.projectManager}</td>
                                            <td>{projectSummary.dueDate}</td>
                                            <td>{projectSummary.status}</td>
                                            <td>{projectSummary.progress}</td>
                                        </tr>
                                    </>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default PMProjectSummary