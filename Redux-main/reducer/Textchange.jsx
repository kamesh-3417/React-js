const Textchange = (name = "", action) => {
  switch (action.type) {
    case "TEXTCHANGE":
      return (name = "Kamesh");
    default:
      return name;
  }
};
export default Textchange;
