"use client"
import Image from "next/image";
import './page.css';
const [count, setCount] = useState(0); 
let counter = 0
const handleClick = () => {
setCount(count + 1);
};
return (
  <div>
    {count}
    <br />
    <button onClick={()}></button>
  </div>
)