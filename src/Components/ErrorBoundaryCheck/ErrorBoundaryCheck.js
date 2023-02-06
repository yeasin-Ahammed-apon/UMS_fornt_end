import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import MetaTag from "../MetaTag/MetaTag";
import PageLoadingFail from "../PageLoadingFail.js/PageLoadingFail";
import Skeletons from "../Skeleton/Skeletons";
const ErrorBoundaryCheck = ({ Page, MetaTitle }) => {
  return (
    <ErrorBoundary fallback={<PageLoadingFail />}>
      <MetaTag MetaTagTitle={MetaTitle} />
      <Suspense fallback={<Skeletons />}>{Page}</Suspense>
    </ErrorBoundary>
  );
};
export default ErrorBoundaryCheck;
