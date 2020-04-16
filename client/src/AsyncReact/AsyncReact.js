import React, { useState } from "react";

const AsyncReact = () => {
  const [search, setSearch] = useState();

  function SubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Async React Hooks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          value={search}
          placeholder="Search for Gifs"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>{search}</p>
    </div>
  );
};

export default AsyncReact;
