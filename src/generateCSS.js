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
  background-image: url(../src/img/stock-hero.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 35rem;
  filter: opacity(0.9);
  overflow: hidden;
}
#title>i{
  font-size: 3rem;
}`;
  return style;
};

module.exports.styles = styles;
