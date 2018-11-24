import { newE2EPage } from "@stencil/core/testing";

describe("rendering", () => {
  it("should render a mapkit-map", async () => {
    const page = await newE2EPage();
    await page.setContent(`<mapkit-map></mapkit-map>`);
    const el = await page.find("mapkit-map");
    expect(el).toBeDefined();
  });

  it("should contain a script tag pointing to MapKit JS", async () => {
    const page = await newE2EPage();
    await page.setContent(`<mapkit-map></mapkit-map>`);
    const el = await page.find("mapkit-map");
    const script = await el.find("script");
    expect(script).toBeDefined();
    expect(script.getAttribute("src")).toBe(
      "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"
    );
  });
});
