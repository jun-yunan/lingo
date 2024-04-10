import { FunctionComponent } from "react";
import Header from "./header";
import Footer from "./footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout: FunctionComponent<MarketingLayoutProps> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
