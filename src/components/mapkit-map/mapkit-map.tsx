import { Component, Prop, Listen, State, Element } from "@stencil/core";

interface MapKitMethods {
  init: any;
  Map: any;
  MarkerAnnotation: any;
  Coordinate: any;
}

declare var mapkit: MapKitMethods;

@Component({
  tag: "mapkit-map",
  styleUrl: "mapkit-map.css"
})
export class MapkitMap {
  @Element() mapkitElement: HTMLElement;

  @Prop() language?: string = "en";
  @Prop() token: string;
  @Prop() latitude: number;
  @Prop() longitude: number;
  @Prop() width: string;
  @Prop() height: string;

  @State() map: any;
  @State() mapkitLoaded: boolean = false;

  @Listen("pinAdded")
  pinAddedHandler(event: CustomEvent) {
    const pin = event.detail;
    this.addPin(pin);
  }

  private mapParent?: HTMLDivElement;

  private addPin(pin) {
    const { latitude, longitude, draggable, selected, color, title } = pin;
    const point = new mapkit.MarkerAnnotation( //add some sort of event manager to add/remove drag/select events
      new mapkit.Coordinate(latitude, longitude),
      {
        draggable,
        selected,
        color,
        title
      }
    );
    this.map.addAnnotations([point]);
  }

  private setupPins() {
    Array.from(this.mapkitElement.querySelectorAll("mapkit-pin")).forEach(el =>
      el.setAttribute("loaded", "true")
    );
  }

  private mapKitLoadedCallback() {
    mapkit.init({
      authorizationCallback: done => {
        done(this.token /*token*/);
        this.map = new mapkit.Map(this.mapParent, {
          center: new mapkit.Coordinate(this.latitude, this.longitude)
        });
        this.mapkitLoaded = true;
        this.setupPins();
      },
      language: this.language
    });
  }

  render() {
    return (
      <div>
        <div
          ref={el => (this.mapParent = el as HTMLDivElement)}
          style={{ width: this.width, height: this.height }}
        />
        {this.mapkitLoaded ? <slot /> : null}
        <script
          onLoad={() => this.mapKitLoadedCallback()}
          src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"
        />
      </div>
    );
  }
}
