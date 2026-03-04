import { ReactNode } from "react";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    {children}
    <Footer />
  </>
);

export default PageLayout;
