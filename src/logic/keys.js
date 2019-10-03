export default function buttonFromKey(key) {
  if (key.match(/[0-9+\-%.=x]/)) {
    return key;
  }
  if (key === "/") {
    return "÷";
  }
  if (key === "*") {
    return "x";
  }
  if (key.match(/[;!]/)) {
    return "+/-";
  }
  if (key === "Enter") {
    return "=";
  }
  if (key.match(/[acAC]/)) {
    return "AC";
  }
  return "";
}
