import './Category.css';
import React from 'react';
import Datas from '../../datas/Datas';
import { useParams } from 'react-router-dom';
import Osten from '../../Components/Products/Osten';

const Category = () => {
  const { category } = useParams();
  // let data
  //    1-usul
  //     switch(category){
  //         case "osten1": data=Datas.osten1;break;
  //         case "osten2": data=Datas.osten2;break;
  //         case "osten3": data=Datas.osten3;break;
  //     }
  console.log(category);
  let data = Datas[category];
  console.log(data);

  return (
    <div>
      <Osten data={data} />
    </div>
  );
};

export default Category;
