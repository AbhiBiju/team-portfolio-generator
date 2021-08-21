const styles = () => {
  let style = `html {
  font-family: "Poppins", sans-serif;
}
.jumbotron {
  font-family: 'Helvetica Neue', sans-serif;
  background: black;
  color: aliceblue;
}
#heroImg {
  background-image: url(./assets/stock-hero.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 0px 25px 25px black inset;
  width: 100%;
  height: 35rem;
  filter: opacity(0.9);
  overflow: hidden;
}
#title>i{
  font-size: 3rem;
}
footer{
  font-size: 1.5rem;
}`;
  return style;
};

module.exports.styles = styles;
