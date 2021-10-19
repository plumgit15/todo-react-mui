import { React } from "react";
import ReactDOM from "react-dom";

import { Todo } from "./Todo";
import { NameList } from "./NameList";

ReactDOM.render(<Todo />, document.getElementById("root"));
ReactDOM.render(<NameList />, document.getElementById("name-list"));
