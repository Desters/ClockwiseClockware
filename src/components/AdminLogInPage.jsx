function AdminLogInPage(){
    return(
        <div className='message-box admin-page'>
            <input className='get-element' type='email' placeholder='Email'/>
            <input className='get-element' type='password' placeholder='Password' />
            <button className='button-style'>Войти</button>
        </div>
    );
}

export default AdminLogInPage;