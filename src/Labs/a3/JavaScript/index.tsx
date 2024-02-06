import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import ImpliedReturn from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import Spreading from "./json/Spreading";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";

function JavaScript() {
  return (
    <div>
      <h3>JavaScript</h3>
      <Destructing />
      <Spreading />
      <MapFunction />
      <WorkingWithArrays />
      <ImpliedReturn />
      <ArrowFunctions />
      <ES5Functions />
      <TernaryOperator />
      <IfElse />
      <BooleanVariables />
      <VariableTypes />
      <VariablesAndConstants />
    </div>
  );
}

export default JavaScript;
