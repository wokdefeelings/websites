import Footer from "./_components/footer";
import Header from "./_components/header";
import Leftnav from "./_components/leftnav";
import Links from "./_components/links";
import Maincontent from "./_components/maincontent";
import Rightnav from "./_components/rightnav";
import styles from "./page.module.css";

export default function Page() {
  const { container, leftnav, maincontent, rightnav, hiddenTablet } =
    styles;

  return (
    <>
      <Header />
      <main className={container}>
        <div className={leftnav}>
          <Leftnav />
        </div>
        <div className={maincontent}>
          <Maincontent />
        </div>
        <div className={rightnav}>
          <Rightnav />
        </div>
        <div className={hiddenTablet}>
          <Links />
        </div>
      </main>
      <Footer />
    </>
  );
}
