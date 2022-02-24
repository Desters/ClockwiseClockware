function createMaster(counter){
    return new Array(counter).fill('').map((element,i) => {
        return(
            <div className='head' key={i}>
                <div className='element'>Петров Иван Максимович</div>
                <div className='element'>{Math.round(Math.random()*5)}</div>
                <div className='element'>Днепр</div>
                <div className='element'><button className="button-style edit">✎</button></div>
                <div className='element'><button className="button-style delete">x</button></div>
            </div>
        );
    });
}

function AdminMastersList(){
    return(
        <div className='content'>
            <div className='title'>
                <div className='element'>Ф.И.О.</div>
                <div className='element'>Рейтинг</div>
                <div className='element'>Город</div>
                <div className='element'>Редактированить</div>
                <div className='element'>Удалить</div>
            </div>
            {createMaster(10)}
            <div className='create-master-button'>Создать мастера</div>
        </div>
    );
}

export default AdminMastersList;