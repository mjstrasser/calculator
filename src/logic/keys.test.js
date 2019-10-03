import buttonFromKey from "./keys";
import chai from "chai";

const expect = chai.expect;

describe("buttonFromKey turns a key press into a button name", () => {
  it("should return digits as themselves", () => {
    expect(buttonFromKey("0")).to.equal("0");
    expect(buttonFromKey("1")).to.equal("1");
    expect(buttonFromKey("2")).to.equal("2");
    expect(buttonFromKey("3")).to.equal("3");
    expect(buttonFromKey("4")).to.equal("4");
    expect(buttonFromKey("5")).to.equal("5");
    expect(buttonFromKey("6")).to.equal("6");
    expect(buttonFromKey("7")).to.equal("7");
    expect(buttonFromKey("8")).to.equal("8");
    expect(buttonFromKey("9")).to.equal("9");
  });
  it("should return '.' for '.'", () => {
    expect(buttonFromKey(".")).to.equal(".");
  });
  it("should return '-' for '-'", () => {
    expect(buttonFromKey("-")).to.equal("-");
  });
  it("should return '+' for '+'", () => {
    expect(buttonFromKey("+")).to.equal("+");
  });
  it("should return '%' for '%'", () => {
    expect(buttonFromKey("%")).to.equal("%");
  });
  it("should return 'x' for 'x'", () => {
    expect(buttonFromKey("x")).to.equal("x");
  });
  it("should return '=' for '=' or Enter", () => {
    expect(buttonFromKey("=")).to.equal("=");
    expect(buttonFromKey("Enter")).to.equal("=");
  });

  it("should return '÷' for '/'", () => {
    expect(buttonFromKey("/")).to.equal("÷");
  });
  it("should return 'x' for '*'", () => {
    expect(buttonFromKey("*")).to.equal("x");
  });

  it("should return '+/-' for ';' or '!'", () => {
    expect(buttonFromKey(";")).to.equal("+/-");
    expect(buttonFromKey("!")).to.equal("+/-");
  });

  it("should return 'AC' for 'c' or 'C'", () => {
    expect(buttonFromKey("c")).to.equal("AC");
    expect(buttonFromKey("C")).to.equal("AC");
  });
  it("should return 'AC' for 'a' or 'A'", () => {
    expect(buttonFromKey("a")).to.equal("AC");
    expect(buttonFromKey("A")).to.equal("AC");
  });

});