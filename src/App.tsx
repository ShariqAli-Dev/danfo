// import { DataFrame } from "../node_modules/danfojs/dist/danfojs-browser/src/index";

import { DataFrame } from "danfojs/dist/danfojs-browser/src/index";

function App() {
  const dataframe = new DataFrame(
    { pig: [20, 18, 489, 675, 1776], horse: [4, 25, 281, 600, 1900] },
    { index: [1990, 1997, 2003, 2009, 2014] }
  );
  dataframe.head().print();

  return <div>danfo is cool</div>;
}

export default App;
