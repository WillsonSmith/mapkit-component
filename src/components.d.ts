/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MapkitMap {
    'height': string;
    'language'?: string;
    'latitude': number;
    'longitude': number;
    'token': string;
    'width': string;
  }
  interface MapkitMapAttributes extends StencilHTMLAttributes {
    'height'?: string;
    'language'?: string;
    'latitude'?: number;
    'longitude'?: number;
    'token'?: string;
    'width'?: string;
  }

  interface MapkitPin {
    'color': string;
    'draggable': boolean;
    'latitude': number;
    'loaded': boolean;
    'longitude': number;
    'pinTitle'?: string;
    'selected': boolean;
  }
  interface MapkitPinAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'draggable'?: boolean;
    'latitude'?: number;
    'loaded'?: boolean;
    'longitude'?: number;
    'onPinAdded'?: (event: CustomEvent) => void;
    'pinTitle'?: string;
    'selected'?: boolean;
  }

  interface MyComponent {
    'first': string;
    'last': string;
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MapkitMap': Components.MapkitMap;
    'MapkitPin': Components.MapkitPin;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'mapkit-map': Components.MapkitMapAttributes;
    'mapkit-pin': Components.MapkitPinAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLMapkitMapElement extends Components.MapkitMap, HTMLStencilElement {}
  var HTMLMapkitMapElement: {
    prototype: HTMLMapkitMapElement;
    new (): HTMLMapkitMapElement;
  };

  interface HTMLMapkitPinElement extends Components.MapkitPin, HTMLStencilElement {}
  var HTMLMapkitPinElement: {
    prototype: HTMLMapkitPinElement;
    new (): HTMLMapkitPinElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'mapkit-map': HTMLMapkitMapElement
    'mapkit-pin': HTMLMapkitPinElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'mapkit-map': HTMLMapkitMapElement;
    'mapkit-pin': HTMLMapkitPinElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}