import React, { useState } from "react";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  function openPopup() {
    setIsClicked(true);
  }

  function closePopup() {
    setIsClicked(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: document.querySelector('input[placeholder="Title"]').value,
      status: document.querySelector('input[name="status"]:checked').value,
      date: document.querySelector('input[type="date"]').value,
      photo: document.querySelector('input[type="url"]').value,
      content: document.querySelector('textarea[placeholder="description"]')
        .value,
    };
    function saveToLocal() {
      const diaryEntry = {
        title: data.title,
        status: data.status,
        date: data.date,
        photo: data.photo,
        content: data.content,
      };

      const existingEntries =
        JSON.parse(localStorage.getItem("diaryEntries")) || [];
      existingEntries.push(diaryEntry);
      localStorage.setItem("diaryEntries", JSON.stringify(existingEntries));
    }

    saveToLocal();
    closePopup();
  };
  return (
    <>
      <header className="bg-red-300 p-4 popup">
        <h1 className="text-3xl font-bold text-center">Daily Diary</h1>
      </header>
      <h2 className="text-2xl mt-15 font-semibold text-center">
        Add New Diary
      </h2>
      <button
        onClick={() => {
          openPopup();
        }}
        type="submit"
        className="bg-red-300  p-2 rounded w-40 mx-auto block mt-4"
      >
        Add
      </button>
      <div className="flex  items-center p-4 mt-20 gap-20 justify-center">
        <label className=" text-xl" htmlFor="date">
          Search By Date
        </label>
        <input
          className="border border-red-300 p-2 rounded w-[30%]"
          type="date"
          name="date"
          id="date"
        />
        <button className="bg-red-300 p-2 rounded w-[20%] max-w-40">
          Search
        </button>
      </div>
      {isClicked && (
        <div className="border-red-300 p-6 rounded shadow-lg fixed w-[50%] max-w-200  h-160 bg-white z-50  items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl font-semibold mb-4 bg-red-300 text-center p-4">
            New Diary
          </h2>

          <form
            className="flex flex-col gap-4 justify-around "
            onSubmit={handleSubmit}
          >
            <div className="flex  gap-2 justify-around">
              <label>Diary Title</label>
              <input
                className="border border-gray-300 p-2 rounded w-[40%] "
                type="text"
                placeholder="Title"
                required
              />
            </div>
            <div className="flex flex-col gap-1 ml-[50%] ">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="To Do"
                  className="w-3 h-3"
                />
                <span>To Do</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="Done"
                  className="w-3 h-3"
                />
                <span>Done</span>
              </label>
            </div>

            <div className="flex  gap-2 justify-around">
              <label htmlFor="date">Diary Date</label>
              <input
                className="border border-gray-300 p-2 rounded w-[40%] "
                type="date"
                required
              />
            </div>
            <div className="flex  gap-2 justify-around">
              <label htmlFor="photo">Add Photo</label>
              <input
                className="border border-gray-300 p-2 rounded w-[40%] "
                type="url"
                placeholder=" Https://example.com/photo.jpg"
                required
              />
            </div>
            <div className="flex  gap-2 justify-around">
              <label htmlFor="description">Description</label>
              <textarea
                className="border border-gray-300 p-2 rounded w-[40%] h-40 "
                placeholder="description"
                required
              ></textarea>
            </div>
            <button
              className="bg-red-300  p-2 rounded w-[40%] mx-auto block mt-4"
              type="submit"
            >
              add and close
            </button>
          </form>
        </div>
      )}
      <hr className="my-20 mr-20 ml-20 border-red-300 border-2" />
    </>
  );
}

export default Header;
