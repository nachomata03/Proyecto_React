import { useState, useEffect} from 'react'
import {getDataById} from '../data/database';
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
      const newResponse = {...response, id}
      SetItemInfo(newResponse);
      setLoading(false)
    }

    getItemData();
  }, [id])

  if(loading)
    return <Loader/>
    
  return <ItemDetail {...ItemInfo}/>
}