import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as HiIcons  from "react-icons/hi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/report',
        icon: <HiIcons.HiDocumentReport />,
        cName: 'nav-text'
    },
    {
        title: 'Download',
        path: '/download',
        icon: <HiIcons.HiArrowCircleDown />,
        cName: 'nav-text'
    },
    {
        title: 'Cake',
        path: '/birthday',
        icon: <HiIcons.HiCake />,
        cName: 'nav-text'
    }
]