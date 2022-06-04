import { useEffect,useState } from "react";

import yelp from "../api/yelp";

export default () => {
  const [results,setResults]=useState([]);

  const [error,setError] = useState('');

  const searchApi = async (searchTerm) => {
    try{
      const response =await yelp.get('/search',{
        params:{
          limit:50,
          term:searchTerm,
          location:'san jose',
        }
      });
      // console.log(response.data.businesses);
      setResults(response.data.businesses);
    }catch(err){
      // console.log(err)
      setError('Someething went wrong');
    };
  }

  useEffect(() => {
    searchApi('pasta');
  },[]);
  return [results,searchApi,error];
}