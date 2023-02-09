import React from 'react';
import './QuestionFilter.css';

const QuestionFilter = (props) => {
    const dropDownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
     };  
  return(
     
     
      <div className="question-filter">
        <div className="question-filter__control"></div>
          <label>Filter By Category  </label>
          <select className='question-checkbox' value={props.selected} onChange={dropDownChangeHandler}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
          </select>
      </div>
     
  );
  
}

export default QuestionFilter