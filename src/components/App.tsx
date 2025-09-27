// src/components/App.tsx

// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

// 1. Імпортуємо функцію useState
import { useState } from "react";

export default function App() {
	// 2. Оголошуємо стан clicks
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
	  // 3. Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
}

