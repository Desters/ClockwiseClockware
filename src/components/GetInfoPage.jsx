import SelectElement from './SelectElement';


const clockSize = ['Маленькие часы', 'Средние часы', 'Большие Часы'];
const city = ['Днепр', 'Ужгород'];      
function createDate(){
    return new Array(14).fill("").map((element,i) => {
        return (new Date().getDate()+i+"."+new Date().getMonth()+1+"."+new Date().getFullYear());
    });
};
function createTime(){
    return new Array(10).fill("").map((element,i)=>{return (9+i+":00");});
};

function GetInfoPage(){
        return(
        <div className='message-box user-get-info'>
            <input className='get-element' type='text' placeholder='Ф.И.О.' min='4' />
            <input className='get-element' type='email' placeholder='Email' min='5' />
            <SelectElement take={clockSize}  />
            <SelectElement take={city} />
            <SelectElement take={createDate()} />
            <SelectElement take={createTime()} />
            <button className='button-style'> Далее </button>
        </div>
    );
}
export default GetInfoPage;