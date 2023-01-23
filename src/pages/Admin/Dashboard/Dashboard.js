import React from 'react';
import DashboardCards from '../../../Components/DashboardCards/DashboardCards';
import { DashboardCardsDataAdmin } from '../../../Data/UiData';


const Dashboard = () => {
    return (
        <div className='bg-light rounded'>
            <DashboardCards DashboardData={DashboardCardsDataAdmin}/>
        </div>
    );
};

export default Dashboard;