import React from 'react';
import "../../src/styles.css";

 function Count({ count }) {
  return (
     <div className="count">
        <h4>{count}</h4>
     </div>
  );
}

export default Count;