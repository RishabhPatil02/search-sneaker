import React from 'react';
import "./App.css";
const Sneaks=({title,color,gender,image,shoe,link})=>{
    return(
        <div className="card card-1">
             <img src={image} alt="" className="shoe-image"/>  
             <div className="black-part">
             <div className="child-title">{title}</div>
            <div className="child-color">{color}</div>
            <div className="child-gender">{gender}</div>
            
         

           <div className="button" id="button-5">
    <div id="translate" className="child" onClick={()=>{link==""?window.location.href=`https://www.google.com/search?q=${shoe}&rlz=1C1CHBF_enIN920IN920&sxsrf=ALeKk03qKNLvbfg3i3X0cCPxjHwW4zkSzw:1605282798927&source=lnms&tbm=shop&sa=X&ved=2ahUKEwizx_m38P_sAhUyxjgGHeQ8D28Q_AUoAXoECA4QAw&biw=822&bih=600`:window.location.href=link}}></div>
    <a  >Buy</a>
    </div> 
  </div>
        </div>
        
    )

}

export default Sneaks;