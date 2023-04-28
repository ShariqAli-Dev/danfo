import { readCSV } from "danfojs/dist/danfojs-browser/src/index";
import { ChangeEvent, FormEvent, useState } from "react";

export default function App() {
  const [file, setFile] = useState<File | undefined>(undefined);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) {
      alert("upload a csv file before you can convert it into a dataframe");
    } else {
      readCSV(file).then((dataframe) => {
        dataframe.plot("plot_div").table();
      });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={onSubmit}>
        <input
          type="file"
          id={"csvFileInput"}
          accept=".csv"
          onChange={onChange}
        />
        <button>Convert To Dataframe</button>
      </form>
      <div id="plot_div" />
    </div>
  );
}
