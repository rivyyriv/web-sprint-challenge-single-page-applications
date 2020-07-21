import React from 'react';
import { ReactComponent as Logo } from './Pepperoni-Pizza-1.jpg';


function Home() {
  // Import result is the URL of your image
  return <img src={Logo} alt="Logo" />;
}
export default Home;