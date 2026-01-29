import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Signup from "./components/Signup";
import About from "./components/About";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : selectedTab === "Create Post" ? (
            <CreatePost></CreatePost>
          ) : selectedTab === "About" ? (
            <About></About>
          ) : (
            <Signup setSelectedTab={setSelectedTab}></Signup>
          )}
          <Footer setSelectedTab={setSelectedTab}></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
