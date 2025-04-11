import type {Component} from 'solid-js';
import {Router, Route} from "@solidjs/router";
import {appearance} from "./stores/preferences";
import {getAppearanceStyles} from "./util/util";

import styles from './App.module.css';
import Home from "./pages/home/Home";
import Playlist from "./pages/playlist/Playlist";
import About from "./pages/about/About";
import Header from "./layout/header/Header";

const App: Component = () => {
  return (
    <div class={`${styles.App} ${getAppearanceStyles(appearance())}`}>
      <Header />
      <div class={styles.Content}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/playlist/:id" component={Playlist} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    </div>
  );
};

export default App;
