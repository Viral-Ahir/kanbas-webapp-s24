import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturns from "./functions/ImpliedReturns";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndesAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./strings/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./json/FunctionDestructing";
function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturns />
      <FunctionParenthesisAndParameters />
      <WorkingWithArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <JsonStringify />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <TemplateLiterals />
      <House />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}
export default JavaScript;
