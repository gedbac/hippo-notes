import { expect } from "chai";
import { uuid } from "hippo/infrastructure/util";

describe("UUID", () => {

  it("should genereate uuid", () => {
    var id = uuid();
    expect(id).to.be.not.null;
  });

});