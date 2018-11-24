import { newE2EPage } from "@stencil/core/testing";

describe("rendering", () => {
  it("should render a mapkit-pin", async () => {
    const page = await newE2EPage();
    await page.setContent(`<mapkit-pin></mapkit-pin>`);
    const el = await page.find("mapkit-pin");
    expect(el).toBeDefined();
  });
});
