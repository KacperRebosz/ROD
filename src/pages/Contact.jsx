import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedPage from "../components/AnimatedPage";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function ContactPage() {
  return (
    <>
      <AnimatedPage>
        <div
          id="kontakt"
          className="mx-2 sm:mx-6 pb-4 sm:pb-6 lg:pt-8 lg:pb-2 h-full xl:mx-12 3xl:mx-16"
        >
          <p className="text-3xl pt-4 p-2 sm:pt-6 lg:pb-8 2xl:p-16 2xl:pt-8 text-center 2xl:text-5xl font-bold text-[#054b28]">
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
