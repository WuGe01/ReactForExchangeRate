
const Item = ({ amount, selectName, result, time , delectData, id }) => {
    function delItem() {
        window.alert("刪除成功");
        delectData(function (prev) {
          return prev.filter(item => item.id !== id )
        })
      };


    return (
    <div className="col-12 mt-3 row">
       <div className="col">台幣金額：<br />{amount} 台幣</div>
       <div className="col">兌換{selectName}：<br />{result} {selectName}</div>
       <div className="col">匯率時間：<br />{time}</div>
       <div className="col text-center"><button onClick={delItem}  type="button" className="btn btn-danger">刪除</button></div>
    </div>
    );
};
    
export default Item;