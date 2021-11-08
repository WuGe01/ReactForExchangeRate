
const ChangeButton = () => {

    function addItem() {
        console.log(1111);
       
    }

    return (
    <div className="col d-flex justify-content-center align-items-center w-100">
        <button type="button" onClick={addItem} className="btn btn-outline-primary" id="ChangeButton">兌換台幣</button>
    </div>
    );
};
    
export default ChangeButton;