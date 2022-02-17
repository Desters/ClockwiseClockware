import SelectElement from './SelectElement';


const clockSize = ['Маленькие часы', 'Средние часы', 'Большие Часы'];
const city = ['Днепр', 'Ужгород'];      
function createDate(){
    const today = [];
    for(let i = 0; i < 15; i++){
        today.push(new Date().getDate()+i+"."+new Date().getMonth()+1+"."+new Date().getFullYear());
    }
    return today;
};
function createTime(){
    const hour = [];
    for(let i = 8; i < 19; i++){
        hour.push(i+':00');
    }
    return hour;
};

function GetInfoPage(){
    return(
        <div className='message-box user-get-info'>
            <input className='get-element' type='text' placeholder='Ф.И.О.' min='4' />
            <input className='get-element' type='email' placeholder='Email' min='5' />
            <SelectElement take={clockSize} />
            <SelectElement take={city} />
            <SelectElement take={createDate()} />
            <SelectElement take={createTime()} />
            <button className='button-style'> Далее </button>
        </div>
    );
}
export default GetInfoPage;