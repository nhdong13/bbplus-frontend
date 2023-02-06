import Footer from "../Footer";
import Header from "../Header";

interface MainLayout {
  children: JSX.Element | JSX.Element[]
}

export default function MainLayout({ children }: MainLayout) {
  return (
    <>
      <Header />
       {children}
      <Footer />
    </>
  )
}
