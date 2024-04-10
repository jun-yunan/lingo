import { FunctionComponent } from "react";

interface FeedWrapperProps {
  children: React.ReactNode;
}

const FeedWrapper: FunctionComponent<FeedWrapperProps> = ({ children }) => {
  return <div className="flex-1 relative top-0 pb-10">{children}</div>;
};

export default FeedWrapper;
