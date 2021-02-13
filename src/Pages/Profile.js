import React, { useState } from 'react'
import ProfileImage from '../assets/profileimg.png';
import Button from '../components/Button';

const Profile = () => {

    const [button, setButton] = useState(true)

    const toggleButton = () => {
        setButton(!button)
    }

    return (
        <div className="card">
            <img src={button ? ProfileImage : "https://picsum.photos/285/285"} alt="Andrej Kasapinov" className='card__image' />
            <h2 className='card__h2'>Andrej Kasapinov</h2>
            <a className="card__a" href="mailto: kasapinovandrej@gmail.com">kasapinovandrej@gmail.com</a>
            <a className="card__a" href="https://github.com/kasapinovandrej" target="_blank">https://github.com/kasapinovandrej</a>
            <Button name='Toggle avatar' color={button ? '#0775ff' : '#15a0bf'} func={toggleButton} />
        </div>
    )
}

export default Profile
