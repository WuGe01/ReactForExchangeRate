import { useState,useEffect } from "react";

const DateForm = ({ add }) => {

    const api = 'https://tw.rter.info/capi.php';

    useEffect(()=>{ 
        fetch(api, {
            // method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        }) /*設定使用GET*/
        .then(res => res.json()) 
        .then(data => {
            console.log(333)
            console.log(data)
        })
        .catch(e => {
            console.log(111)
            console.log(e)
        })
    });


    const [amount, setAmount] = useState("");
    function amountChange(e) {
      console.log(e.target.value);
      setAmount(e.target.value);
    } 

    const [select, setSelect] = useState("DEFAULT");
    function selectChange(e) {
      console.log(e.target.value);
      setSelect(e.target.value);
    }; 
    
    const [result, setResult] = useState("");


    function resultChange() {
        
        console.log("兌換");
        console.log(amount);
        console.log(select);
        setResult(11);
    };


    return (
        <div className="row">

            <div className="col">
                <div className="form-floating">
                    <input type="tel" value={amount} onChange={amountChange} name="Amount" className="form-control" id="Amount"  ></input>                 
                    <label htmlFor="Amount" className="form-label">兌換台幣金額</label>
                </div>
            </div>

            <div className="col">
                <div className="form-floating">
                    <select value={select} onChange={selectChange} className="form-select" name="SelectData" id="SelectData">
                    <option value="DEFAULT" disabled>請選擇</option>
                    <option value="JPY">日幣</option>
                    <option value="USD">美金</option>
                    <option value="HKD">港幣</option>
                    <option value="GBP">英鎊</option>
                    <option value="AUD">澳幣</option>
                    <option value="CAD">加拿大幣</option>
                    <option value="SGD">新加玻幣</option>
                    <option value="CHF">瑞士法郎</option>
                    <option value="ZAR">南非幣</option>
                    <option value="SEK">瑞典幣</option>
                    <option value="NZD">紐元</option>
                    <option value="THB">泰幣</option>
                    <option value="PHP">菲國比索</option>
                    <option value="IDR">印尼幣</option>
                    <option value="EUR">歐元</option>
                    <option value="KRW">韓元</option>
                    <option value="VND">越南盾</option>
                    <option value="MYR">馬來幣</option>
                    <option value="CNY">人民幣</option>
                </select>
                <label htmlFor="SelectData">兌換幣別</label>
                </div>
            </div>

            <div className="col d-flex justify-content-center align-items-center w-100">
                <button type="button" onClick={resultChange} className="btn btn-outline-primary" id="ChangeButton">兌換台幣</button>
            </div>

            <div className="col">
                <div className="form-floating">
                <input type="tel" value={result} readOnly="readonly" name="ChangeResult" className="form-control" id="ChangeResult" ></input>                 
                <label htmlFor="ChangeResult" className="form-label">兌換結果</label>
                </div>
            </div>

        </div>
      );
    };
    
export default DateForm;