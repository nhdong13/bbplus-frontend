import Footer from "../Footer";
import Header from "../Header";
import { GlobalModal } from "../Modal";

interface MainLayout {
  children: JSX.Element | JSX.Element[];
  hasDivider?: boolean;
}

export default function MainLayout({ children, hasDivider }: MainLayout) {
  return (
    <>
      <Header hasDivider={hasDivider} />
      <GlobalModal>{children}</GlobalModal>
      <Footer />
    </>
  );
}
