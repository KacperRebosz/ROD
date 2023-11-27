import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedPage from "../components/AnimatedPage";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function ContactPage() {
  return (
    <>
      <AnimatedPage>
        <div id="ContactPageID" className="h-full">
          <p className="ml-20 p-16 pt-8 text-center text-5xl font-bold text-[#054b28]">
            Kontakt
          </p>
          <section>
            <p>
              Adres
              <br />
              ul. Gustawa Morcinka 1
              <br />
              25-332 Kielce
            </p>
            <p>
              Biuro czynne:
              <br />
              środa: 14:00 - 16:00
              <br />
              sobota: 12:00 - 14:00
            </p>
            <p>Gospodarz ogrodu:</p>Rafał Baradziej - tel. 888 136 273 <br />
            {/* <img src="/mail.icon.svg" width="50px" /> */}
            <section className="flex place-items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ color: "#054b28" }}
              />
              <p className="ml-2">magnoliakielce@poczta.fm</p>
            </section>
          </section>
        </div>
      </AnimatedPage>
    </>
  );
}
