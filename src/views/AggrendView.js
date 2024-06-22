import React from 'react';
import InsultText from '../components/InsultText';
import AggyImage from '../components/AggyImage';
import Nuke from '../components/Nuke';
import MenuTable from '../components/AggrendFoodTable';
import MealCountTable from '../components/MealCountTable';

const AggrendView = ({
    count,
    showAlternate,
    incrementCounter,
    resetCounter,
    handleEat,
    mealCounts,
}) => {
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
