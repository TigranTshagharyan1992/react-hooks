import React, {useEffect, useState} from 'react';

const List = ({getItems}) => {
    const [items, setItems] = useState([]);
  useEffect(()=>{
      setItems(getItems());
      console.log(items);
  },[getItems])
    return (
        <div>
            <ul>
                {items.map((item, key) => {
                    return <li key={key}>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default List;