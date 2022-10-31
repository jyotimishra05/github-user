import React, { useEffect, useState } from 'react'
import GithubUsers from './GithubUsers';
import Loading from './Loading';

const UseEffectFetchApi = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    const getApi = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            console.log(response)
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);  //we can use async await instead of promises
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            getApi();
        },3000)
       
    },[])//[] array dependency pass so that it can run only once .otherwise infinite time callback
    if (loading) {
        return <Loading />
    }
  return (
    <div>
   <GithubUsers users={users}/>
    </div>
  )
}

export default UseEffectFetchApi