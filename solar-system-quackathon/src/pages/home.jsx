import InfoBox from "../components/infobox";
import Header from "../components/header";
import Footer from "../components/footer";
import Planets from "../components/planets";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      {/** Comment from Ash:
       * The InfoBox is only here during development. This will be removed later. */}
      {/* <InfoBox /> */}
      <Link to='/planet'>
        <button type='button'>Mercury</button>
      </Link>
      <Planets />

      <Footer />
    </>
  );
}
