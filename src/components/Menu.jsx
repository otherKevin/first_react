import "../style/Menu.css"

function Menu() {
  return (
    <div id="menuContainer">
      <h2 id="componentTitle">Menu Title</h2>
      <div id="menuValues">
        <span className="menuItem">Item 1</span>
        <br />
        <span className="menuItem">Item 2</span>
        <br />
        <span className="menuItem">Item 3</span>
        <br />
      </div>
    </div>
  );
}

export default Menu;
