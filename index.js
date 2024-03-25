const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="mainHeading"> Congratulations </h1>
    <div className="cardContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="heading"> Kiran V </h1>
      <p className="content">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image1"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
