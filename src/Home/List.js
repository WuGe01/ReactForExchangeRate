import Item from "./Item";
const List = ({ listData, delectData }) => {
    return (
        <div className="col-12 mt-2 rowHistory">
            <hr />
            <h5 className="col-12 mt-2">歷史紀錄</h5>
            {listData.map((item) => {
            const { amount, selectName, result, time ,id } = item;
                return (
                <Item
                    amount={amount}
                    selectName={selectName}
                    result={result}
                    time={time}
                    key={id}
                    id={id}
                    delectData={delectData}
                />
                );
            })}            
        </div>
      );
    };
    
export default List;