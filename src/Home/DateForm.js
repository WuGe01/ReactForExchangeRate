import SelectData from "./SelectData";
import Amount from "./Amount";
import ChangeButton from "./ChangeButton";
import ChangeResult from "./ChangeResult";


const DateForm = () => {
    return (
        <div className="row">
            <Amount />
            <SelectData />
            <ChangeButton />
            <ChangeResult />
        </div>
      );
    };
    
export default DateForm;