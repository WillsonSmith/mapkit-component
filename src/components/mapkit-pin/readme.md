# mapkit-pin



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                             | Type      |
| ----------- | ----------- | --------------------------------------------------------------------------------------- | --------- |
| `color`     | `color`     | The color of your pin as a hex value. Defaults to `#FC5C47`, the default MapKit colour. | `string`  |
| `draggable` | `draggable` | A boolean to determine if you can drag the pin around the map.                          | `boolean` |
| `latitude`  | `latitude`  | The latitude of the pin you are placing on the map.                                     | `number`  |
| `loaded`    | `loaded`    | This prop determines if MapKit JS has loaded. Only emits event once this prop is true.  | `boolean` |
| `longitude` | `longitude` | The longitude of the pin you are placing on the map.                                    | `number`  |
| `pinTitle`  | `pin-title` | Adds a title to the pin on your map.                                                    | `string`  |
| `selected`  | `selected`  | Determines if this pin start selected on the map.                                       | `boolean` |


## Events

| Event      | Detail | Description                                                                                           |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `pinAdded` |        | Emitted once the component receives the `loaded` prop. This event tells the map where to place a pin. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
