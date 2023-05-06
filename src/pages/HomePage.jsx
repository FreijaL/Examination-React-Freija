import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddHorseSection from "../Components/AddHorseSection";
import Header from "../Components/Header";
import HorseCard from "../Components/HorseCard";
import style from './HomePage.module.scss'
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";


function HomePage() {

    const [horses, setHorses] = useState([]);
    const [originalHorses, setOriginalHorses] = useState([]);

    const navigate = useNavigate(); 
    const horseArray = useSelector((state) => {
        return state.horses
    });

    useEffect(() => {
        setHorses(horseArray)
        setOriginalHorses(horseArray)
    }, [horseArray]);


    function searchInput(e) {
        setHorses(originalHorses);
        let copyHorses = [...originalHorses];

        let returnedHorses = copyHorses.filter((horse) => horse.name.includes(e));
        setHorses(returnedHorses);
    };


    return (
        <main className={style.main}>
            <Header />
            <AddHorseSection />
            <section className={style.searchContainer}>
                {/* <h4>Search horse</h4> */}
                <input 
                    className={style.__searchBox} 
                    type='text' 
                    placeholder="Search horse..." 
                    onChange={(e) => searchInput(e.target.value)} 
                />
            </section>
            <section className={style.cardContainer}>
                {
                    horses.map((horse, i) => 
                    <HorseCard 
                        key={horse.id} 
                        horse={horse} 
                        action={() => navigate('/horseinfo')}
                    />)
                }
            </section>
            <Footer />
        </main>
    );
}

export default HomePage;