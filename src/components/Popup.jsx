import '../Style.css'

function PopUpWindow(){
    return(
        <div className='popUpWindow'>
            <p>По заданным параметрам нет свободных мастеров</p>
            <button className='buttonStyle'>Далее</button>
        </div>
    );
}

export default PopUpWindow;