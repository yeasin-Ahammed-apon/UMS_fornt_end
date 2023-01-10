import React from "react";
import { Helmet } from "react-helmet";

const MetaTag = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.MetaTagTitle}</title>
        <meta name="description" content="Nested component" />
      </Helmet>
    </div>
  );
};

export default MetaTag;
