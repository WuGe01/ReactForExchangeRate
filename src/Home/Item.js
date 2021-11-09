
const Item = ({ amount, select, result }) => {
    return (
    <div className="col-12 mt-3 row">
       <div className="col">兌換台幣金額：<br />{amount}</div>
       <div className="col">兌換幣別：<br />{select}</div>
       <div className="col">兌後總額：<br />{result} {select}</div>
    </div>
    );
};
    
export default Item;