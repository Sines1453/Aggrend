import React, { useState } from 'react';
import InsultText from './InsultText';
import AggyImage from './AggyImage';
import Nuke from './Nuke';
import MenuTable from './AggrendFoodTable';
import MealCountTable from './MealCountTable';

const AggrendView = () => {
    const [count, setCount] = useState(0);
    const [showAlternate, setShowAlternate] = useState(false);
    const [mealCounts, setMealCounts] = useState({});

    const incrementCounter = () => {
        setCount((prevCount) => prevCount + 1);
        setShowAlternate(count >= 25);
    };

    const resetCounter = () => {
        setCount(0);
        setShowAlternate(false);
    };
    const handleEat = (type, item) => {
        setMealCounts((prevCounts) => ({
            ...prevCounts,
            [type]: {
                ...prevCounts[type],
                [item]: (prevCounts[type]?.[item] || 0) + 1,
            },
        }));
    };

    return (
        <>
            <div className='text-white'>
                <InsultText
                    count={count}
                    incrementCounter={incrementCounter}
                />
                {showAlternate ? (
                    <Nuke resetCounter={resetCounter} />
                ) : (
                    <AggyImage size={count} />
                )}
            </div>
            <MenuTable onEat={handleEat} />
            <MealCountTable mealCounts={mealCounts} />
        </>
    );
};

export default AggrendView;
