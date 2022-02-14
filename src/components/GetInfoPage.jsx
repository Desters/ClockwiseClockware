import SelectElement from './SelectElement';
import '../Style.css'

const ClockSize = ['Маленькие часы', 'Средние часы', 'Большие Часы'],
      City = ['Днепр', 'Ужгород'];      
      function createDate(){
        const Today = [];
        for(let i = 0; i < 15; i++){
            Today.push(new Date().getDate()+i+"."+new Date().getMonth()+1+"."+new Date().getFullYear());
          }
          return Today;
      };
      function createTime(){
        const Hour = [];
        for(let i = 8; i < 19; i++){
            Hour.push(i+':00');
          }
          return Hour;
      };

function GetInfoPage(){
    return(
        <div className='getInfo'>
            <input className='getElement' type='text' placeholder='Ф.И.О.' min='4' />
            <input className='getElement' type='email' placeholder='Email' min='5' />
            <SelectElement take={ClockSize} />
            <SelectElement take={City} />
            <SelectElement take={createDate()} />
            <SelectElement take={createTime()} />
            <button className='buttonStyle'> Далее </button>
        </div>
    );
}
export default GetInfoPage;