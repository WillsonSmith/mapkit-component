import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "mapkit-map",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ]
};
