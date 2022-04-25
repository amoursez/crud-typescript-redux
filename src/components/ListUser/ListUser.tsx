import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {useActions} from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CardUser from '../CardUser/CardUser';
import { useMemo } from 'react';
import Header from '../Header/Header'
const ListUser = () => {
    const {getUsers} = useActions()
    const {error, loading,user} = useTypedSelector(state => state.userReducer)

  /*   useEffect(()=>{
        getUsers()
    },[]) */
    useMemo(() => {
        getUsers()
    },[])
    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

  
    return (
        <>
        
        <div style={{marginTop: 50 , display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
           
            {user?.map(item=>
              <CardUser key={item.id} item={item} />
                )}
        </div>
        </>
    );
};

export default ListUser;