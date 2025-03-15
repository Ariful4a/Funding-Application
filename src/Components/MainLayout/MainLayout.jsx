import React from 'react';

const MainLayout = () => {
    return (
        <div>
            <h1 className='text-2xl'>Main Layout</h1>
            <h2 className='text-2xl'>Helo wourld</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;