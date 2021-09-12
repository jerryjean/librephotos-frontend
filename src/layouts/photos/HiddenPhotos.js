import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHiddenPhotos } from "../../actions/photosActions";
import _ from "lodash";
import { PhotoListView } from "../../components/photolist/PhotoListView";
import { Photoset } from "../../reducers/photosReducer";

export class HiddenPhotos extends Component {
  componentDidMount() {
    if (this.props.fetchedPhotoset !== Photoset.HIDDEN) {
      this.props.dispatch(fetchHiddenPhotos());
    }
  }

  render() {
    return (
      <PhotoListView
        showHidden={true}
        title={"Hidden Photos"}
        loading={this.props.fetchedPhotoset !== Photoset.HIDDEN}
        titleIconName={"hide"}
        isDateView={true}
        photosGroupedByDate={this.props.photosGroupedByDate}
        idx2hash={this.props.photosFlat}
      />
    );
  }
}

HiddenPhotos = connect((store) => {
  return {
    photosFlat: store.photos.photosFlat,
    photosGroupedByDate: store.photos.photosGroupedByDate,
    fetchedPhotoset: store.photos.fetchedPhotoset,
  };
})(HiddenPhotos);