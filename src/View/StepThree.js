import React from "react";



const StepThree = props => {
  return (
    <div>
      {props.godziny.map((item) => {
        let HourseAfter = this.state.godziny.indexOf(item);
        return <li key={HourseAfter}>Po {HourseAfter} godzinach od skończenia picia twoja zawartośc alkoholu we krwi wynosi {item}</li>

      })}
    </div>
  );
}

export default StepThree;