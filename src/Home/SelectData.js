const SelectData = () => {

    return (
        <div className="col">
            <div className="form-floating">
            <select defaultValue={'DEFAULT'} className="form-select" name="SelectData" id="SelectData">
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
    );
};
    
export default SelectData;