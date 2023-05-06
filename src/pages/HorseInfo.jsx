import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './HorseInfo.module.scss'
import Button from "../Components/Button";
import { changeInfo } from "../actions/horseActions";
import InputField from "../Components/InputField";
import Footer from "../Components/Footer";

// Av någon anledning kommer inte owners nya värde upp helt plötsligt... sorry!

function HorseInfo() {

    const [horse, setHorse] = useState([]);
    const [showOwner, setShowOwner] = useState(false);
    const [onField, setOnField] = useState();
    const [isFriendy, setIsFriendly] = useState(true);
    
    const [ageInputVisible, setAgeInputVisible] = useState(false);
    const [newAge, setNewAge] = useState('');
    const [nameInputVisible, setNameInputVisible] = useState(false);
    const [newName, setNewName] = useState('');
    const [genderInputVisible, setGenderInputVisible] = useState(false);
    const [newGender, setNewGender] = useState('');
    const [ownerNameInputVisible, setOwnerNameInputVisible] = useState(false);
    const [newOwnerName, setNewOwnerName] = useState('');
    const [ownerPhoneInputVisible, setOwnerPhoneInputVisible] = useState(false);
    const [newOwnerPhone, setNewOwnerPhone] = useState('');
    const [ownerAddressInputVisible, setOwnerAddressInputVisible] = useState(false);
    const [newOwnerAddress, setNewOwnerAddress] = useState('');
    
    const [showEdit, setShowEdit] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const state = useSelector((state) => {
        return state
    });


    useEffect(() => {
        let horseIdMatch = state.horses.find((horse) => horse.id == id );
        setHorse(horseIdMatch);

        let horseLocation = state.horses.find((horse) => { return horse.onField})
        setOnField(horseLocation)

        let horseFriendly = state.horses.find((horse) => { return horse.isFriendly})
        setIsFriendly(horseFriendly)

        let horseName = state.horses.find((horse) => {return horse.name })
        setNewName(horseName)

        let horseGender = state.horses.find((horse) => { return horse.gender})
        setNewGender(horseGender)

        let ownerName = state.horses.find((horse) => {return horse.owner.name})
        setNewOwnerName(ownerName)

        let ownerPhone = state.horses.find((horse) => { return horse.owner.phone})
        setNewOwnerPhone(ownerPhone)

        let ownerAddress = state.horses.find((horse) => { return horse.owner.address})
        setNewOwnerAddress(ownerAddress)
    
        // setNewOwnerName(horse.owner.name)
        // setNewOwnerPhone(horse.owner.phone)
        // setNewOwnerAddress(horse.owner.address)
        setNewName(horse.name)
        setNewGender(horse.gender)
        setNewAge(horse.age)
    }, [state]);

    
    function toggleLocation() {
        setOnField(prevstate => !prevstate)
    };

    function toggleOwner() {
        setShowOwner(prevState => !prevState)
    }

    function toggleIsFriendly() {
        setIsFriendly(prevstate => !prevstate)
    };


    useEffect(function () {
        setTimeout(function () {
            setShowEdit(false)
        }, 5000)

    }, [showEdit]);


    return ( 
        <main className={style.horseInfoContainer}>
            <Header action={() => navigate('/home')}/>
            <BackButton action={() => navigate(-1)} />
            <button className={style.editButton} onClick={() => setShowEdit(prevstate => !prevstate)} >Edit</button>
            { 
                showEdit 
                ? 
                <article className={style.editTextInfo}>
                    <p>If you want to change some information about the horse, please click on the text you need to change</p>  
                </article>
                : 
                ''
            }
            {   horse &&
                <section className={style.horseInfo}>
                    {
                        nameInputVisible 
                        ?
                        <>
                            <InputField 
                                type='text'
                                placeholder={horse.name}
                                defaultValue={horse.name}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                            <button onClick={() => {[dispatch(changeInfo(horse, 'name', newName)), setNameInputVisible(false)], []}}>Done</button>
                        </>
                        :
                        <h1 onClick={() => setNameInputVisible(true)}>{horse.name}</h1>
                    }
                    <img src={horse.img}/>
                    <article className={style.isFriendlyContainer}>
                    { 
                        isFriendy
                        ? 
                        <section className={style.friendly}>
                            <div className={style.isFriendly} onClick={toggleIsFriendly} ></div>
                            <p>{horse.name} is friendly, go ahead and pet!</p> 
                        </section>
                        :
                        <section className={style.friendly}>
                            <div className={style.notFriendly} onClick={toggleIsFriendly}></div> 
                            <p>{horse.name} is not so friendly, please don't pet!</p>
                        </section>
                    }
                    </article>
                    <section className={style.location}>
                        <p>If you want to find { horse.gender == "Mare" ? 'her, she' : 'him, he'} is currently <b>
                        {
                            onField ? ' on the field.' : ' in the stable.'
                        }
                        </b></p>
                    </section>
        
        
                    <section className={style.buttonContainer}>
                        {
                            onField
                            ?
                            <Button 
                                className={style.__stableButton} 
                                title='Move to stable'
                                action={toggleLocation}
                            />
                            :
                            <Button
                                className={style.__fieldButton}
                                title='Move to field'
                                action={toggleLocation}
                            />
                        }
                    </section>

                 
                    <section>
                        <article className={style.specificInfoContainer}>
                            { 
                                ageInputVisible ? 
                                <>
                                    <InputField 
                                        type='text' 
                                        placeholder={horse.age} 
                                        defaultValue={horse.age}
                                        onChange={(e) => setNewAge(e.target.value)}
                                    />
                                    <button onClick={() => {[dispatch(changeInfo(horse, 'age', newAge)), setAgeInputVisible(false)], []}}>Done</button>
                                </> 
                                : 
                                <p onClick={() => setAgeInputVisible(true)} >Age of the horse: {horse.age}</p> 
                            }
                            {
                                genderInputVisible
                                ?
                                <>
                                    <InputField 
                                        type='text'
                                        placeholder={horse.gender}
                                        defaultValue={horse.gander}
                                        onChange={(e) => setNewGender(e.target.value)}
                                    />
                                    <button onClick={() => {[dispatch(changeInfo(horse, 'gender', newGender)), setGenderInputVisible(false)], []}}>Done</button>
                                </>
                                :
                                <p onClick={() => setGenderInputVisible(true)}>Gender of the horse: {horse.gender}</p>
                            }          
                        </article>
                        <article className={style.infoOwnerContainer}>
                            <h5>Do you want to get in touch with the owner?</h5>
                            <p onClick={toggleOwner} >Click here</p>
                            {
                                showOwner 
                                ?
                                <section className={style.__info}>
                                        {
                                            ownerNameInputVisible
                                            ?
                                            <>
                                                <InputField 
                                                    type='text'
                                                    placeholder='Owners name'
                                                    defaultValue={horse.owner.name}
                                                    onChange={(e) => setNewOwnerName(e.target.value)}
                                                />
                                                <button onClick={() => {[dispatch(changeInfo(horse, 'ownerName', newOwnerName)), setOwnerNameInputVisible(false)], [] }} >Done</button>
                                            </>
                                            :
                                            <p onClick={() => setOwnerNameInputVisible(true)} >Owner: &nbsp;&nbsp;&nbsp;&nbsp;{horse.owner.name}</p>
                                        }
                                        {
                                            ownerPhoneInputVisible
                                            ?
                                            <>
                                                <InputField 
                                                    type='number'
                                                    placeholder='Owners phone'
                                                    defaultValue={horse.owner.phone}
                                                    onChange={(e) => setNewOwnerPhone(e.target.value)}
                                                />
                                                <button onClick={() => {[dispatch(changeInfo(horse, 'OwnerPhone', newOwnerPhone)), setOwnerPhoneInputVisible(false)], [] }} >Done</button>
                                            </>
                                            :
                                            <p onClick={() => setOwnerPhoneInputVisible(true)} >Phone: &nbsp;&nbsp;&nbsp;&nbsp;+46{horse.owner.phone}</p>
                                        }
                                        {
                                            ownerAddressInputVisible
                                            ?
                                            <>
                                                <InputField 
                                                    type='text'
                                                    placeholder='Owners address'
                                                    defaultValue={horse.owner.address}
                                                    onChange={(e) => setNewOwnerAddress(e.target.value)}
                                                />
                                                <button onClick={() => {[dispatch(changeInfo(horse, 'OwnerAddress', newOwnerAddress)), setOwnerAddressInputVisible(false)], [] }} >Done</button>
                                            </>
                                            :
                                            <p onClick={() => setOwnerAddressInputVisible(true)}>Address: &nbsp;&nbsp;{horse.owner.address}</p>
                                        }
                                </section>
                                :
                                ''
                            }
                        </article>
                    </section>
                </section>
            }
            <Footer />
        </main>
     );
}

export default HorseInfo;