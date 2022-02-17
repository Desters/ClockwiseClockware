function createMaster(count) {
  return new Array(count).fill(count).map((element,i) => {
      return(
    <div className="masters-box" key={i}>
      <p>ФИО мастера</p>
      <span className="stars">★★★★★</span>
    </div>
      );
  });
}

function MastersChoice({ count }) {
  return (
    <div className="message-box master-list">
      {createMaster(count)}
      <button className="button-style">Далее</button>
    </div>
  );
}

export default MastersChoice;
