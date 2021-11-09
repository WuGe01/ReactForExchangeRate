import { useState } from "react";

const DateForm = ({ add }) => {

    const api = 'https://cors-anywhere.herokuapp.com/https://tw.rter.info/capi.php';

    const [amount, setAmount] = useState("");
    function amountChange(e) {
      setAmount(e.target.value);
    } 

    const [select, setSelect] = useState("DEFAULT");
    function selectChange(e) {
      setSelect(e.target.value);
    }; 
    
    const [result, setResult] = useState("");

    function resultChange() {       
        console.log("兌換");
        if (amount === '') {
         alert("請輸入台幣金額");
         return true;
        }
        if (select === 'DEFAULT') {
         alert("請輸入兌換幣別");
         return true;
        }
        fetch(api)
        .then(res => res.json()) 
        .then(data => {
            const money = amount/data['USDTWD']['Exrate'];
            const toDollar = money*data[`USD${select}`]['Exrate'];
            setResult(toDollar);
            add(function (prevData) {
                return [
                  {
                    amount,
                    select,
                    result: toDollar,
                  },
                  ...prevData,
                ];
            });
        })
        .catch(e => {
            console.log(e)
        })
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