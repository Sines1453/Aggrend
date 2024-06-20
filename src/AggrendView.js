import React from 'react';
import InsultText from './InsultText';
import AggyImage from './AggyImage';
import Nuke from './Nuke';
import MenuTable from './AggrendFoodTable';
import MealCountTable from './MealCountTable';

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
