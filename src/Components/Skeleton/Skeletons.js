import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Skeletons = () => {
    return (
        <>
        <SkeletonTheme
          baseColor="#9298a8"
          highlightColor="#444"
        >
          <div className="row">
            <div className="col-4">
              <Skeleton count={5} />
            </div>
            <div className="col-8">
              <Skeleton count={5} />
            </div>
          </div>

          <div>
            <Skeleton count={50} />
          </div>
        </SkeletonTheme>
      </>
    );
};

export default Skeletons;