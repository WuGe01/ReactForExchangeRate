import Item from "./Item";
const List = ({ listData }) => {
    return (
        <div className="col-12 mt-2 rowHistory">
            <hr />
            <h5 className="col-12 mt-2">歷史紀錄</h5>
            {listData.map((item) => {
            const { amount, select, result } = item;
                return (
                <Item
                    amount={amount}
                    select={select}
                    result={result}
                />
                );
            })}            
        </div>
      );
    };
    
export default List;