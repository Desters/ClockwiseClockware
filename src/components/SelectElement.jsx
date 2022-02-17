function SelectElement({take}){    
    return(
        <select className='get-element'>
             { take.map(element => <option key={ element }>{ element }</option>) };
        </select>
    );
}

export default SelectElement;