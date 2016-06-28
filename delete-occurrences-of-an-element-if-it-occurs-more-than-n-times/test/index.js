import { expect } from "chai";
import { deleteNth } from "../";

describe("deleteNth", function() {

    it("works", function() {
        expect(deleteNth([], 0)).to.deep.equal([]);
        expect(deleteNth([1], 0)).to.deep.equal([]);
        expect(deleteNth([1, 2], 0)).to.deep.equal([]);

        expect(deleteNth([1, 2], 1)).to.deep.equal([1, 2]);
        expect(deleteNth([1, 1, 2], 1)).to.deep.equal([1, 2]);
        expect(deleteNth([1, 1, 1, 2, 3, 3, 2], 1)).to.deep.equal([1, 2, 3]);

        expect(deleteNth([1, 1, 1, 2, 3, 3, 2], 2)).to.deep.equal([1, 1, 2, 3, 3, 2]);
    });

});
