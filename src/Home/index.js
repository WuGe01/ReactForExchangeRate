import { useState } from "react";
import DateForm from "./DateForm";
import List from "./List";

const Home = () => {

const [data, setData] = useState([]);

return (
    <div className="FormBoby">
      <div className="container shadow p-4 m-4">
      <h4 className="col-12 mt-2 mb-4">台幣兌換系統</h4>
        <DateForm add={setData} />
        <List listData={data} />
      </div>
    </div>
  );
};

export default Home;