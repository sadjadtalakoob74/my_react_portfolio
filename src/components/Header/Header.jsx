import favicon from '../../assets/favicon.png';
import './Header.css'

const reactDescriptions = ['Mobile', 'Flutter', 'React'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={favicon} alt="avatar" />
      <h1>Sajjad Talakoob</h1>
      {/* <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p> */}
      <p>
        {description} developer
      </p>
    </header>
  );
}