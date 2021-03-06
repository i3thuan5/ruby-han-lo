import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { RubyHanLo } from "../lib";

const setup = ({ 漢字詞 = "", 臺羅閏號調 = "" }) => {
  const component = shallow(
    <RubyHanLo 漢字詞={漢字詞}
      臺羅閏號調={臺羅閏號調}/>,
    );
  return component.children().map(node => node.text());
};

describe("Component", () => {
  describe("RubyHanLo", () => {
    it("should render 一組漢羅詞", () => {
      const html = setup({
        臺羅閏號調: "Ta̍k-ke",
        漢字詞: "逐家",
      });
      expect(html).to.eql([
        "Ta̍k-ke",
        "逐家",
      ]);
    });
  });
});