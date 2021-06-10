import React , {useState , useEffect} from 'react'


const Unauthor = () => {

    const [message , setMessage] = useState('');

    const roles = JSON.parse(sessionStorage.getItem('roles'));
    useEffect(() => {
        if (roles.indexOf('ROLE_USER') == 0) {
            //alert('hello')
            setMessage('KHONG CO QUYEN TRUY CAP')
        }
    }, [])

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
}

export default Unauthor