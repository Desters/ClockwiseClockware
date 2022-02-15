import '../Style.css'

function createMaster(element){
    const arr = [];
    for(let i = 0; i < element; i++){
        arr.push(
        <div className='mastersBox' key={i}><p>ФИО мастреа</p>
        <span className='stars'>★★★★★</span>
        </div>
        );
    }
    return arr;
}

function MastersChoice({count}){
    return(
        <div className='massageBox'>
            {createMaster(count)}
            <button className='buttonStyle'>Далее</button>
        </div>  
    );
}

export default MastersChoice;