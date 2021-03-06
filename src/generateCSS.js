const styles = () => {
  let style = `html {
  font-family: "Poppins", sans-serif;
}
body {
  background-color: aliceblue;
}
li > a {
  text-decoration: none;
  color: lightcoral;
  transition: 0.5s;
}
li > a:hover {
  color: green;
}
.jumbotron {
  font-family: "Helvetica Neue", sans-serif;
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
#title {
  color: darkolivegreen;
  transition: 0.6s;
}
#title > a > i {
  font-size: 3rem;
  transition: 0.6s;
  color: darkolivegreen;
}
#title > a > i:hover {
  font-size: 3.5rem;
  color: lightgreen;
}
#title:hover {
  color: lightgreen;
}
footer {
  font-size: 1.5rem;
}`;
  return style;
};

module.exports.styles = styles;
