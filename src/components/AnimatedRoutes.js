import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import ChampionList from '../frontpage/ChampionList';
import ChampionInfo from '../championInfo/ChampionInfo';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<ChampionList />} />
                <Route path="/info/:championid" element={<ChampionInfo />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes