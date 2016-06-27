import { expect } from "chai";
import "../";

describe("toJadenCase", function() {

  it("works for normal strings", function() {
      expect("hi".toJadenCase()).to.equal("Hi");
      expect("hi friend".toJadenCase()).to.equal("Hi Friend");
      expect("how are you?".toJadenCase()).to.equal("How Are You?");
  });

});
