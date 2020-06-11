import axios from 'axios'

export const fetchData  = () => dispatch => {
    dispatch({ type: 'FETCH_DATA' })
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        console.log(res.data.results)
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data.results })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: 'ERROR', payload: err.response })
    });
  };