import { useState, useEffect } from "react";
function NextedList() {
  const [list, setList] = useState([
    {
      _id: "123",
      title: "item 1",
    },
    {
      _id: "234",
      title: "item 2",
    },
  ]);
  return (
    <div className="m-2">
      <ul className="list-group">
        <li className="list-group-item">
          <input className="form-control w-50" />
        </li>
        {list.map((item) => (
          <li key={item._id} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NextedList;
