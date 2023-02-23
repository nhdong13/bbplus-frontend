import Footer from "../Footer";
import Header from "../Header";

interface MainLayout {
  children: JSX.Element | JSX.Element[]
  hasDivider?: boolean
}

export default function MainLayout({ children, hasDivider }: MainLayout) {
  return (
    <>
      <Header hasDivider={hasDivider} />
       {children}
      <Footer />
    </>
  )
}
