import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  var user = {
    name: "Aziza Boussetta",
    bio: "Aziza Boussetta is a creator of minimalistic x bold graphics anddigital artwork. Artist/ Creative Director by Day #NFT minting@with FND night.",
    profession: "Digital Artist",
  };
  const handleName = (nameU) => {
    alert(`hello ${nameU}`);
  };
  return (
    <>
      <Profile user={user} handleName={handleName}>
        <img
          src="https://i.imgur.com/wvxPV9S.png"
          height="100"
          width="100"
          alt="logo"
        />
      </Profile>
    </>
  );
}

export default App;
