import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <section className="pb-45 pt-45 p-relative border-style contactStyle">
    <div className="container">
      <div className="row justify-content-center d-flex">
        <div className='col-lg-12'>
      <div style={{ height: '500px', width: '100%', borderRadius:'15px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:0}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>
      </div>
      </div>
      </section>
    );
  }
}

export default GoogleMap;