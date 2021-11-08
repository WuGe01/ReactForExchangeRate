
const ChangeResult = () => {
    return (
    <div className="col">
        <div className="form-floating">
        <input type="tel" readonly="readonly" name="ChangeResult" className="form-control" id="ChangeResult" onkeyup="value=value.replace(/[^\d.]/g,'')" ></input>                 
        <label for="ChangeResult" className="form-label">兌換結果</label>
        </div>
    </div>
    );
};
    
export default ChangeResult;