import React from 'react';


 const Scroll = (props) =>{
   return (
     <div style={{ overfolwY :'scroll',border:'1px solid black', hight:'800px' }}>
              {props.childern}
     </div>
   );
 };
 export default Scroll;
