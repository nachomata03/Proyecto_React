import { useState, useEffect} from 'react'
import {getDataById} from '../data/getdata';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailConteiner() {
  const [ItemInfo, SetItemInfo] = useState({});
  const {id} = useParams();
  
  useEffect(() => {
    
    async function getItemData() {
      const response = await getDataById(id);
      SetItemInfo(response);
    }

    getItemData();
  }, [id])

  const item = {...ItemInfo} //creo la variable item y hago un spread de ItemInfo y luego le vuelvo a hacer spread para pasarle las props porque cuando lo hago directamente me da error

  return <ItemDetail {...item}/>
}