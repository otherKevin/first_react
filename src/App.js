import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Article from "./components/Article";
import React, { createElement } from "react";

function App() {
  /* return (
    <div id="mainContainer">
      <Menu />
      <hr />
      <Article />
      <hr />
      <Article />
      <hr />
      <Article />
      <hr />
    </div>
  ); */
  /* return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Titre du site"),
    React.createElement("p", null, "Content")
  ); */

  const objArray = [
    {
      title: "Titre 1",
      author: "Bernardo",
      date: "22/11/2022",
      imageLink: "Image link 1",
      content: "Contenu1",
    },
    {
      title: "Titre 2",
      author: "Djonny",
      date: "11/01/2008",
      imageLink: "Image link2",
      content: "Le contenu de l'article 2",
    },
    {
      title: "Titre de l'article 3",
      author: "Ernestine",
      date: "13/03/1963",
      imageLink: "Image link 4",
      content: "Content",
    },
    {
      title: "TITRE MONUMENTAL POUR CET ARTICLE",
      author: "Jeanne Inne",
      date: "12/07/2001",
      imageLink: "Image link4",
      content: "CONTUNE ULTIME DE LA FOLI PURE",
    },
  ];

  return (
    <div id="mainContainer">
      <Menu />
      {objArray.map((article, index) => (
        <Article article={article} key={index} />
      ))} 
    </div>
  );
}

export default App;
