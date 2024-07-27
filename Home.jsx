import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
const Home = () => {
    const [img, setImg] = useState([]);
    const [search, setSearch] = useState("nature");
    
    useEffect(() => {
        if (search) {
            axios.get(`https://pixabay.com/api/?key=44939454-f8eacba456d915034a303e757&q=${search}&image_type=photo`)
                .then(response => {
                    setImg(response.data.hits);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [search]);

    return (
        <>
        <div id="pagecontainer">
            <div id="search-page">
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <span className="fs-4"><img src="../logo.png" id="pixabay"/>&nbsp;&nbsp;Pixabay</span>
                        </a>
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="#" className="nav-link"><b>Explore</b></a></li>
                            <li className="nav-item"><a href="/Login" className="nav-link" onClick={()=>console.log("login clicked")}><b>Log in</b></a></li>
                            <li className="nav-item"><a href="#" className="nav-link"><b>Join</b></a></li>
                            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page"><b>Upload</b></a></li>
                        </ul>
                    </header>
                </div>

                <h1>Stunning royalty-free images & royalty-free stock</h1>
                <p>Over 4.6 million+ high quality stock images, videos and music shared by our talented community.</p>
                <div id="search-bar">
                    <i style={{ color: "gray", marginLeft: "10px" }} className="fa-solid fa-magnifying-glass"></i>
                    <input
                        id="inputbox"
                        type="search"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search for all images on pixabay"
                    />
                    <br></br><br></br><br></br><br></br>
                </div>
            </div>
            <div id="image-gallery">
                {img.map(x => (
                    <div key={x.id} className="image-container">
                        <img src={x.webformatURL} alt={x.tags} className="image" />
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default Home;