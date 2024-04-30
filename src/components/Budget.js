import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { dispatch, currency } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const { remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        if (remaining >= 10) { 
            setNewBudget(updatedBudget);
            dispatch({ type: 'SET_BUDGET', payload: parseInt(updatedBudget) });
        } else {
            alert("You cannot reduce the budget value lower than spending!");
        }
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency}  </span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
