function loadTable(counter){
    return new Array(counter).fill('').map((element,i) => {
        return(
            <div className='head' key={i}>
                <div className='element'>Иванов Иван Иваночив</div>
                <div className='element'>test@gmail.com</div>
                <div className='element'>Днепр</div>
                <div className='element'><button className="button-style edit">✎</button></div>
                <div className='element'><button className="button-style delete">x</button></div>
            </div>
        );
    });
}

function AdminClientList(){
    return(
        <div className='content'>
            <div className="title">
                <div className='element'>Ф.И.О.</div>
                <div className='element'>Email</div>
                <div className='element'>Город</div>
                <div className='element'>Редактировать</div>
                <div className='element'>Удалить</div>
            </div>
            {loadTable(5)}
        </div>
    );
}

export default AdminClientList;