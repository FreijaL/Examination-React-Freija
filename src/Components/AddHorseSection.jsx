import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Inputfield from "./InputField";
import style from './AddHorseSection.module.scss'
import { addHorse } from "../actions/horseActions";
import { useEffect, useState } from "react";

function AddHorseSection() {
    
    const [imageInput, setImageInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [genderInput, setGenderInput] = useState('');
    const [ownerInput, setOwnerInput] = useState('');
    const horses = useSelector(state => {
        return state.horses
    })

    const dispatch = useDispatch();


    // - - - - - - - - FIXA CHANGE OWNER - - - - - - - - 
    // Hej Maja! - vill bara säga att jag inte lyckades lösa hur man får namner på owner att hamna på owner.name
    // så därför blir owner-fältet tomt när ma lägger till ny häst.

   
    function handleAddNewHorse(e) {
        let horse = {
            id: horses.length + 1,
            img: imageInput,
            name: nameInput,
            age: ageInput,
            gender: genderInput,
            owner: ownerInput
        }
        dispatch(addHorse(horse));
    };


    return ( 
        <section className={style.addHorseSection}>
            <h3>Add a new horse to the stable</h3>
            <article className={style.__inputContainer}>
                <section className={style.__inputs}>
                    <Inputfield 
                        id='imageInput' 
                        label='Horse image' 
                        type='text' 
                        placeholder='http://...'
                        value={imageInput}
                        onChange={(e) => setImageInput(e.target.value)} />
                </section>  
                <section className={style.__inputs}>
                    <Inputfield 
                        id='nameInput' 
                        label='Horse name' 
                        type='text' 
                        placeholder='Ladoga'
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)} />
                </section>
                <section className={style.__inputs}>
                    <Inputfield 
                        id='ageInput' 
                        label='Horse age' 
                        type='number' 
                        placeholder='9'
                        value={ageInput}
                        onChange={(e) => setAgeInput(e.target.value)} />
                </section>
                <section className={style.__inputs}>
                    <label htmlFor="genderInput">Horse sex:</label>
                    <select id='genderInput' value={genderInput} onChange={(e) => setGenderInput(e.target.value)} >
                        <option default seleted='true'>--- Select ---</option>
                        <option value='Mare'>Mare</option>
                        <option value='Gelding'>Gelding</option>
                        <option value='Stallion'>Stallion</option>
                    </select>
                </section>
                <section className={style.__inputs}>
                    <Inputfield 
                        id='ownerInput' 
                        label='Owner' 
                        type='text' 
                        placeholder='Freija Lindkvist'
                        value={ownerInput.name}
                        onChange={(e) => setOwnerInput(e.target.value)} />
                </section>
                <section className={style.__inputs} >
                    <Button action={() => handleAddNewHorse()} title='ADD HORSE' />
                </section>
            </article>
        </section>
     );
}

export default AddHorseSection;