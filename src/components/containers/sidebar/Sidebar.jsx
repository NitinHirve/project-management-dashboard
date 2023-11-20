import React from 'react'
import styles from '../../../styles/containers/Sidebar.module.css'

import { ReactComponent as PromageLogo } from '../../../core/assets/sidebar/promageLogo.svg'
import { ReactComponent as DashboardButtonIcon } from '../../../core/assets/sidebar/dashboardButtonIcon.svg'
import { ReactComponent as CreateNewProjectButtonIcon } from '../../../core/assets/sidebar/createNewProjectButtonIcon.svg'
import { ReactComponent as ProjectsIcon } from '../../../core/assets/sidebar/projectsIcon.svg'
import { ReactComponent as TasksIcon } from '../../../core/assets/sidebar/tasksIcon.svg'
import { ReactComponent as DashboardIcon } from '../../../core/assets/sidebar/dashboardIcon.svg'
import { ReactComponent as TimeLogIcon } from '../../../core/assets/sidebar/timeLogIcon.svg'
import { ReactComponent as ResourceMngtIcon } from '../../../core/assets/sidebar/resourceMngtIcon.svg'
import { ReactComponent as UsersIcon } from '../../../core/assets/sidebar/usersIcon.svg'
import { ReactComponent as ProjectTemplateIcon } from '../../../core/assets/sidebar/projectTemplateIcon.svg'
import { ReactComponent as MenuSettingsIcon } from '../../../core/assets/sidebar/menuSettingsIcon.svg'
import { ReactComponent as HelpIcon } from '../../../core/assets/sidebar/helpIcon.svg'

const dashboardSideLinks = [
    {
        icon: <ProjectsIcon />,
        name: 'Projects',
    },
    {
        icon: <TasksIcon />,
        name: 'Tasks',
    },
    {
        icon: <DashboardIcon />,
        name: 'Dashboard',
    },
    {
        icon: <TimeLogIcon />,
        name: 'Time log',
    },
    {
        icon: <ResourceMngtIcon />,
        name: 'Resource mgnt',
    },
    {
        icon: <UsersIcon />,
        name: 'Users',
    },
    {
        icon: <ProjectTemplateIcon />,
        name: 'Project template',
    },
    {
        icon: <MenuSettingsIcon />,
        name: 'Menu settings',
    },

]


const Sidebar = () => {
    return (
        <>
            <main className={styles.sidebar} >
                <div className={styles.sidebar_logo} style={{ position: 'absolute', top: 32, left: 30 }}>
                    {<PromageLogo />}
                </div>
                <section>
                    <div className={styles.sidebar_new_project_button} >
                        <span className={styles.sidebar_new_project_button_icon} >
                            <CreateNewProjectButtonIcon />
                        </span>
                        <span className={styles.sidebar_new_project_button_title} >
                            Create new project
                        </span>
                    </div>
                    <div className={styles.sidebar_dashboard_button} >
                        {<DashboardButtonIcon />}Dashboard
                    </div>
                    <div className={styles.sidebar_sideLinks} >
                        {
                            dashboardSideLinks.length > 0 && (
                                dashboardSideLinks.map(sideLink => (
                                    <>
                                        <div className={styles.sidebar_sideLinks_title_and_icon} >
                                            {sideLink.icon} {sideLink.name}
                                        </div>
                                    </>
                                ))
                            )
                        }
                    </div>
                </section>

                <div className={styles.sidebar_help_icon} style={{ position: 'absolute', bottom: 30, left: 30 }}>
                    <HelpIcon />
                </div>
            </main>

        </>
    )
}

export default Sidebar