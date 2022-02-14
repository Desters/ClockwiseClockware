import '../Style.css'

function SelectElement({take}){
    const list = [];
    for(let i = 0; i < take.length; i++){
        list.push(<option key={take[i]}> {take[i]} </option>);
    }
    return(
        <select className='getElement'>
             {list};
        </select>
    );
}

export default SelectElement;