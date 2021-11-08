
const Amount = () => {
    return (
    <div className="col">
        <div className="form-floating">
            <input type="tel" name="Amount" className="form-control" id="Amount" onkeyup="value=value.replace(/[^\d.]/g,'')" ></input>                 
            <label for="Amount" className="form-label">兌換台幣金額</label>
        </div>
    </div>
    );
};
    
export default Amount;