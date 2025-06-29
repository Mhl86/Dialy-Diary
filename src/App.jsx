import Header from "./header.jsx";
import React from "react";
const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center gap-6 px-4 ">
        {JSON.parse(localStorage.getItem("diaryEntries"))?.map(
          (entry, index) => (
            <div className=" p-4 mb-4 rounded shadow-lg w-[40%]" key={index}>
              <h3>{entry.title}</h3>
              <p> {entry.status}</p>
              <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
              {entry.photo && <img src={entry.photo} alt="Diary" />}
              <p>{entry.content}</p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default App;
