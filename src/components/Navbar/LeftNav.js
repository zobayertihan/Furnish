import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);
    const active = "bg-[#0a192f] p-2 text-white";
    const normal = "";

    useEffect(() => {
        fetch('https://furnish-server.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>

            <ul>
                {
                    catagories.map(catagory =>
                        <li className={'flex items-start p-5 hover:bg-[#0a192f] hover:text-white '} key={catagory.id}>
                            <NavLink className={({ isActive }) => isActive ? active : normal} to={`/catagories/${catagory.id}`}>{catagory.name}</NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default LeftNav;