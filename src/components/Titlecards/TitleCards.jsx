import { useEffect, useRef, useState } from 'react';
import './TitleCards.css'
import { Link } from 'react-router-dom';


const TitleCards = ({ title, category }) => {
    const [apiData, setApiData] = useState([])

    const cardsRef = useRef()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjQ0NGVkZDc2MGQ5M2I2MzVjMGNiMGIwZDdmNGEzNiIsIm5iZiI6MTczNzgwNzYzNy4xMTAwMDAxLCJzdWIiOiI2Nzk0ZDcxNTBlMWUwNDg2ZDYyYWQ4NzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EKPIhD0Oe44xxpoUkX0Sw-EmR_qn4cNr9Mg3ERFhPQE'
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));


        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])
    return (
        <div className='title-cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    );
};

export default TitleCards;