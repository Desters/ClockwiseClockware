function createCityList(counter){
    return new Array(counter).fill('').map((element,i) => {
        return(
            <div className='head' key={i}>
                <div className='element'>Днепр</div>
                <div className='element'><button className="button-style edit">✎</button></div>
                <div className='element'><button className="button-style delete">x</button></div>
            </div>
        );
    });
}

function AdminCity(){
    return(
        <div className='content'>
            <div className="title">
                <div className='element'>Город</div>
                <div className='element'>Редактировать</div>
                <div className='element'>Удалить</div>
            </div>
            {createCityList(2)}
            <div className='create-master-button'>Создать город</div>
        </div>
    );
}

export default AdminCity;