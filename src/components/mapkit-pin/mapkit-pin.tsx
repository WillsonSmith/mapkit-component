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
  tag: "mapkit-pin",
  styleUrl: "mapkit-pin.css"
})
export class MapkitPin {
  @Prop() latitude: number;
  @Prop() longitude: number;
  @Prop() draggable: boolean;
  @Prop() loaded: boolean;
  @Prop() selected: boolean;
  @Prop() color: string = "#FC5C47";
  @Prop() pinTitle?: string;

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
