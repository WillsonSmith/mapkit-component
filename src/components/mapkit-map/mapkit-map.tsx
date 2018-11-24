import { Component, Prop, Listen, State, Element } from "@stencil/core";

interface MapKitMethods {
  init: any;
  Map: any;
  MarkerAnnotation: any;
  Coordinate: any;
}

declare var mapkit: MapKitMethods;

@Component({
  tag: "mapkit-map"
})
export class MapkitMap {
  @Element() mapkitElement: HTMLElement;

  /**
   * The language code of the language you want your Apple maps to be in.
   *
   */
  @Prop() language?: string = "en";

  /**
   * Your Apple MapKit token.
   * https://developer.apple.com/maps/mapkitjs/
   */
  @Prop() token: string;

  /**
   * The latitude of the centre of your map.
   */
  @Prop() latitude: number;

  /**
   * The longitude of the centre of your map.
   */
  @Prop() longitude: number;

  /**
   * The width of your map.
   * Defined by css size properties. Example: 500px, 100%.
   */
  @Prop() width: string;

  /**
   * The height of your map.
   * Defined by css size properties. Example: 500px, 100vh.
   */
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
