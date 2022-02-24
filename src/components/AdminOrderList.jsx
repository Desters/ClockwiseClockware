function createOrder(counter){
    return new Array(counter).fill('').map((element,i) => {
        return(
            <div className='head' key={i}>
                <div className='element'>Иванов Иван Иваночив</div>
                <div className='element'>Днепр</div>
                <div className='element'>01.01.2021 12:00</div>
                <div className='element'>Большие часы</div>
                <div className='element'>Петров Иван Иванович</div>
                <div className='element'><button className="button-style edit">✎</button></div>
                <div className='element'><button className="button-style delete">x</button></div>
            </div>
        );
    });
}

function AdminOrderList(){
    return(
        <div className='content'>
            <div className='title'>
                <div className='element'>Ф.И.О.</div>
                <div className='element'>Город</div>
                <div className='element'>Дата и время</div>
                <div className='element'>Размер часов</div>
                <div className='element'>Мастер</div>
                <div className='element'>Редактировать</div>
                <div className='element'>Удалить</div>
            </div>
            {createOrder(20)}
        </div>
    );
}

export default AdminOrderList;