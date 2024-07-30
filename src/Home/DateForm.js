import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const DateForm = ({ add }) => {

    const api = 'https://tw.rter.info/capi.php';

    const [amount, setAmount] = useState("");
    function amountChange(e) {
      setAmount(e.target.value);
    } 

    const [select, setSelect] = useState("DEFAULT");
    const [selectName, setSelectName] = useState("");
    const [selectNum, setSelectNum] = useState("");

    function selectChange(e) {
      setSelect(e.target.value);
      setSelectName(e.target.value.slice(3));
      setSelectNum(e.target.value.slice(0,3));
    }; 
    
    const [result, setResult] = useState("");

    function resultChange() {       

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
            const toDollar = money*data[`USD${selectNum}`]['Exrate'];
            const time = data[`USD${selectNum}`]['UTC'];
            setResult(toDollar);
            add(function (prevData) {
                return [
                  {
                    amount,
                    selectName,
                    result: toDollar,
                    time: time,
                    id: uuidv4(),
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
                    <option value="JPY日幣">日幣</option>
                    <option value="USD美金">美金</option>
                    <option value="HKD港幣">港幣</option>
                    <option value="GBP英鎊">英鎊</option>
                    <option value="AUD澳幣">澳幣</option>
                    <option value="CAD加拿大幣">加拿大幣</option>
                    <option value="SGD新加玻幣">新加玻幣</option>
                    <option value="CHF瑞士法郎">瑞士法郎</option>
                    <option value="ZAR南非幣">南非幣</option>
                    <option value="SEK瑞典幣">瑞典幣</option>
                    <option value="NZD紐元">紐元</option>
                    <option value="THB泰幣">泰幣</option>
                    <option value="PHP菲國比索">菲國比索</option>
                    <option value="IDR印尼幣">印尼幣</option>
                    <option value="EUR歐元">歐元</option>
                    <option value="KRW韓元">韓元</option>
                    <option value="VND越南盾">越南盾</option>
                    <option value="MYR馬來幣">馬來幣</option>
                    <option value="CNY人民幣">人民幣</option>
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