import { useState, useEffect} from 'react'
import {getDataById} from '../data/getdata';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

export default function ItemDetailConteiner() {

  const [loading, setLoading] = useState(true)
  const [ItemInfo, SetItemInfo] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    async function getItemData() {
      setLoading(true)
      const response = await getDataById(id);
      SetItemInfo(response);
      setLoading(false)
    }

    getItemData();
  }, [id])

  if(loading)
    return <Loader/>

  const item = {...ItemInfo} //creo la variable item y hago un spread de ItemInfo y luego le vuelvo a hacer spread para pasarle las props porque cuando lo hago directamente me da error

  return <ItemDetail {...item}/>
}