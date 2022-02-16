function AdminLogInPage(){
    return(
        <div className='message-box adminPage'>
            <input className='getElement' type='email' placeholder='Email'/>
            <input className='getElement' type='password' placeholder='Password' />
            <button className='button-style'>Войти</button>
        </div>
    );
}

export default AdminLogInPage;