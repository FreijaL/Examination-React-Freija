import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './HorseCard.module.scss'
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { deleteHorse } from "../actions/horseActions";

function HorseCard({horse}) {

    const [newAge, setNewAge] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function deleteHorseFromArray() {
        dispatch(deleteHorse({id: horse.id}))
    }; 

    return ( 
        <article className={style.card}>
            <figure className={style.__image}>
                <img className={style.img} src={horse.img} />
            </figure>
            <section className={style.__infoText}>
                <section>
                    <h3>{horse.name}</h3>
                </section>
                <section className={style.__infoTextSection}>
                    <p>Age: {horse.age}</p>
                    <p>{horse.gender}</p>
                </section>
                <section className={style.__owner}>
                    <p>Owner: <br/>{horse.owner.name}</p>
                </section>
            </section>
            <section className={style.buttonsContainer}>
                <Button 
                    id={horse.id} 
                    title='Info' 
                    action={() => navigate(`/horseinfo/${horse.id}`)} 
                />
                <Button t
                    title='Delete' 
                    action={deleteHorseFromArray} 
                />
            </section>
        </article>
     );
}

export default HorseCard;