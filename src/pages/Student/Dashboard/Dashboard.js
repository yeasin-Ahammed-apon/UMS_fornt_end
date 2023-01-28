import React from 'react';
import DashboardCards from '../../../Components/DashboardCards/DashboardCards';
import { DashboardCardsDataStudent } from '../../../Data/UiData';


const Dashboard = () => {    
    return (
        <div className='bg-light rounded'>
            <DashboardCards DashboardData={DashboardCardsDataStudent}/>
        </div>
    );
};

export default Dashboard;