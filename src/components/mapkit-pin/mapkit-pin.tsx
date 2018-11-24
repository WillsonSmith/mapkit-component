import { Component, Event, EventEmitter, Prop, Watch } from "@stencil/core";

interface Pin {
  latitude: number;
  longitude: number;
  draggable: boolean;
  selected: boolean;
  title?: string;
  color: string;
}

@Component({
  tag: "mapkit-pin"
})
export class MapkitPin {
  /**
   * The latitude of the pin you are placing on the map.
   */
  @Prop() latitude: number;

  /**
   * The longitude of the pin you are placing on the map.
   */
  @Prop() longitude: number;

  /**
   * A boolean to determine if you can drag the pin around the map.
   */
  @Prop() draggable: boolean;

  /**
   * This prop determines if MapKit JS has loaded.
   * Only emits event once this prop is true.
   */
  @Prop() loaded: boolean;

  /**
   * Determines if this pin start selected on the map.
   */
  @Prop() selected: boolean;

  /**
   * The color of your pin as a hex value.
   * Defaults to `#FC5C47`, the default MapKit colour.
   */
  @Prop() color: string = "#FC5C47";

  /**
   * Adds a title to the pin on your map.
   */
  @Prop() pinTitle?: string;

  /**
   * Emitted once the component receives the `loaded` prop.
   * This event tells the map where to place a pin.
   */
  @Event() pinAdded: EventEmitter;
  pinAddedHandler(pin: Pin) {
    this.pinAdded.emit(pin);
  }

  @Watch("loaded")
  loadedHandler() {
    this.pinAddedHandler({
      latitude: this.latitude,
      longitude: this.longitude,
      draggable: this.draggable,
      selected: this.selected,
      title: this.pinTitle || null,
      color: this.color
    });
  }
  render() {
    return null;
  }
}
