import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { PageOne } from "./page-1/PageOne";
import { Form } from "./page-2/posts/full-page-of-post/form/Form";
import { FullPost } from "./page-2/posts/full-page-of-post/FullPost";
import { Profile } from "./page-2/Profile";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/fullposts/:id" element={<FullPost />} />
        <Route path="/form:id" element={<Form />}/>
      </Routes>
    </>
  );
}

export default App;
