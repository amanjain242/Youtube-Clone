import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from "./components/Feed";
import Header from "./components/Header";
import VideoDetails from "./components/VideoDetails";
import SearchResult from "./components/SearchResult";
import { AppContext } from './context/contextApi';

const App= () => {
  return (
    <AppContext>
      <BrowserRouter>
         <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed/>} />
            <Route path="/searchResult/:searchQuery" 
            element={<SearchResult/>}
            />
            <Route path="/video/:id" element={<VideoDetails/>} />
          </Routes>
         </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
