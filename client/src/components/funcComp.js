import React, { Component } from "react";
import { connect } from "react-redux";

export const funcComp = () => {
  const refText = useRef("Smaple");
  return (
    <div>
      <input type="text" value="" ref={refText} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(funcComp);
