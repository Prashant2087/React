import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "aqua", fontSize: "48px", textTransform: "uppercase" };
  return (
    <>
      {/* <header style= {style}> */}
      <header className="header">
        <h1>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone over, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're stil working on our menu. Please come back later.</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        photoName="pizzas/funghi.jpg"
        ingredients="Tomato, mushrooms"
        price={12}
      /> */}
    </main>
  );
}
// function Pizza(props) {
//   console.log(props);
//   if (props.pizzaObj.soldOut) return null;
//   return (
//     <li className="pizza">
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <p>{props.pizzaObj.price + 3}</p>
//       </div>
//     </li>
//   );
// }

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? (
          <span>"SOLD OUT"</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour < closeHour;
  // if (hour >= openHour && hour < closeHour) alert("We're currently open");
  // else alert("Sorry We're closed");
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open");
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
);
