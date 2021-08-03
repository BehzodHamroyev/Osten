import React from 'react';
import { useParams } from 'react-router-dom';
import Datas from '../../datas/Datas';
import NewsComponent from '../../Components/News/NewsComponent';
import Osten from '../../Components/Products/Osten';
import './Category.css';
const Category = () => {
  const { category } = useParams();
  const data = Datas[category];
  // (console.log(data.tip)
  if(data.tip=="news"){
    return (<NewsComponent data={data}/>   )
  }
  else{ return(<Osten data={data}/>)}

};

export default Category;
