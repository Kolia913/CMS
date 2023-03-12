import { faker } from '@faker-js/faker';
import React, { useEffect, useState } from 'react';
import AgeChart from '../../components/AgeChart/AgeChart';
import GenderChart from '../../components/GenderChart/GenderChart';
import InformationsWidget from '../../components/InformationsWidget/InformationsWidget';
import NotificationsWidget from '../../components/NotificationsWidget/NotificationsWidget';
import StudentsChart from '../../components/StudentsChart/StudentsChart';
import TasksWidget from '../../components/TasksWidget/TasksWidget';
import Button from '../../components/atoms/Button/Button';
import withLayout from '../../layouts/withLayout';
import styles from './Dashboard.module.css';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const ageLabels = ['18-24', '24-30', '30-45', '45-60']

const Dashboard = () => {

  const [isMonth, setIsMonth] = useState(true)
  const [labels, setLabels] = useState(monthLabels)
  const [studentsData, setStudentsData] = useState([])
  const [ageData, setAgeData] = useState([])
  const [maleData, setMaleData] = useState([])
  const [femaleData, setFemaleData] = useState([])

  useEffect(() => {
    isMonth ? setLabels(monthLabels) : setLabels(dayLabels)
  }, [isMonth])
  

  useEffect(() => {
    const studendsFakeData = labels.map(() => faker.datatype.number({min: 3, max: 50}))
    setStudentsData(studendsFakeData)
    const fakeAgeData = ageLabels.map(() => faker.datatype.number({min: 5, max: 20}))
    setAgeData(fakeAgeData)
    const fakeMaleData = labels.map(() => faker.datatype.number({min: 3, max: 30}))
    setMaleData(fakeMaleData)
    const fakeFemaleData = labels.map(() => faker.datatype.number({min: 3, max: 30}))
    setFemaleData(fakeFemaleData)
  }, [labels])

  const onDayClick = () => {
    setIsMonth(false)
  }

  const onMonthClick = () => {
    setIsMonth(true)
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__charts}>
        <div className={styles.dashboard_chartsButtons}>
          <Button text='Day' className={styles.dashboard__buttonDay} onClick={onDayClick} />
          <Button text='Month' className={styles.dashboard__buttonMonth} onClick={onMonthClick}/>
        </div>
        <StudentsChart 
          title={'Students'} 
          isMonth={isMonth} 
          labels={labels}
          data={studentsData}
        />
        <div className={styles.dashboard__chartsBottom}>
          <AgeChart data={ageData} labels={ageLabels} title={'Age of students'} />
          <GenderChart labels={labels} maleData={maleData} femaleData={femaleData} title={'Gender of students'} />
        </div>
      </div>
      <div className={styles.dashboard__widgets}>
        <div className={styles.dashboard__widgetsInfo}>
          <InformationsWidget />
        </div>
        <div className={styles.dashboard__widgetsTask}>
          <TasksWidget />
        </div >
        <div className={styles.dashboard__widgetsNotifications}> 
          <NotificationsWidget isDropdown={false} />
        </div>        
      </div>
    </div>
  )
}

export default withLayout(Dashboard)