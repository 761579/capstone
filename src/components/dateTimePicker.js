import React, { useReducer } from 'react';

const DateTimePicker = ({ selectedDate }) => {
  const updateTime = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIME_OPTIONS':
        return {
          ...state,
          timeOptions: getTimeOptions(action.date),
        };
      default:
        return state;
    }
  };

  const getTimeOptions = (date) => {
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    const todayDate=getCurrentDate()
      if(date==todayDate){
    const options = ['5:00 AM', '12:00 PM', '3:00 PM', '4:00 PM'];
      return options;
      }
      else{
     const options = ['9:00 AM', '5:00 PM', '2:00 PM', '4:00 PM'];
      return options;}
    
    
  };

  const initializeTime = {
    timeOptions: [],
    
  };

const [state, dispatch] = useReducer(updateTime, initializeTime);
 React.useEffect(() => {
    dispatch({ type: 'UPDATE_TIME_OPTIONS', date: selectedDate });
  }, [selectedDate]);

  return (
    <div>
      
      <select className="input-field" >
        <option>Select Time</option>
        {state.timeOptions.map((option) => (
          <option   key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateTimePicker;