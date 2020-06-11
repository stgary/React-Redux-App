import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/index'

const AnimeCharacters = props => {

    const handleData = e => {
        e.preventDefault();
        props.fetchData(); 
    }


    return (
        <div>
            <h1>Search Characters</h1>
            {props.isFetching ? (
                <div>**We are fetching data**</div>
            ) : (
                <button onClick={handleData}>Get Characters</button>
             )}
            <div className='container'>
            {props.error ? (
                <div>{props.error}</div> 
            ) : ( props.characters.map(char => (
                <div>
                    <div>{char.name}</div>
                    <img src={char.image} alt='charcter from rick and morty' />
                </div>
            )))}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
      characters: state.anime.characters,
      isFetching: state.anime.isFetching,
      error: state.anime.error
    };
  };

export default connect(
    mapStateToProps, 
    { fetchData }
)(AnimeCharacters);