function SelectElement({take}){    
    return(
        <select className='getElement'>
             { take.map(element => <option key={ element }>{ element }</option>) };
        </select>
    );
}

export default SelectElement;