import React from 'react';
import classes from './QuestionFilter.module.css';

const QuestionFilter = (props) => {
    const dropDownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
     };  
  return(
     
     
      <div className={`${classes.question_filter}`}>
        <div className={`${classes.question_filter_control}`}></div>
          <label>Filter By Category  </label>
          <select className={`${classes.question_checkbox}`} value={props.selected} onChange={dropDownChangeHandler}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
          </select>
      </div>
     
  );
  
}

export default QuestionFilter