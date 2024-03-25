import { useSelector } from "react-redux";
import { LabState } from "./store";

function BeThankful() {
  const { message } = useSelector((store: LabState) => store.helloReducer);
  const { count } = useSelector((store: LabState) => store.counterReducer);

  return (
    <div>
      <h1>
        Be thankful for {message} {count}
      </h1>
    </div>
  );
}

export default BeThankful;
