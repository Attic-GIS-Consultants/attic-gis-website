import Footer from "./footer"
import Navbar from "../components/navbar"


export default function Layout({ children }) {
    return (
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
            <main>{children}</main>
        <Footer />
      </div>
    )
  }