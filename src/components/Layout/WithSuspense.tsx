import LoadingPage from "@/pages/LoadingPage/LoadingPage";
import { Suspense, type ReactNode } from "react";

const WithSuspense = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};

export default WithSuspense;
