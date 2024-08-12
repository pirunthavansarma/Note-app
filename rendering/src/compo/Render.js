import React, { useState } from "react";


const Render = () => {

    const [isSHow, setIsShow] = useState(false);

  const toggleContent = () => {
    setIsShow(!isSHow);
  };



    return (  
        <div className="container">
        <h1>Conditional Rendering Example</h1>
        <button onClick={toggleContent}>{isSHow ? 'Hide Content' : 'Show Content'}
    </button>
    {isSHow && <p>Content</p>}
        </div>
    );
}
 
export default Render;