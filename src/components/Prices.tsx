import { CardSpotlight } from "./ui/CardSpotlight";

const Prices = () => {
  return (
    <div className="py-20" id="prices">
      <h2 className="heading text-white">
        Vores {" "}
        <span className="text-purple">priser</span>
      </h2>
      <div className="pt-14 md:flex-row flex flex-col justify-center items-center gap-8">
        
        <CardSpotlight className="h-96 w-96 flex flex-col justify-between">
          <div>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Standard pris
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            1200 kr./timen
            <ul className="list-none  mt-2">
              <Step title="Chatbots" />
              <Step title="Teknisk SEO" />
              <Step title="Programmering" />
              <Step title="Hjemmesider og websystemer" />
            </ul>
          </div>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Søger du en special løsning?
            <br />
            Kontakt os gerne for et uforpligtende møde.
          </p>
        </CardSpotlight>
        
        <CardSpotlight className="h-96 w-96 flex flex-col justify-between">
          <div>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Basic chatbot
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            8000 kr. herefter 400 kr./pr. måned
            <ul className="list-none  mt-2">
              <Step title="Vector database" />
              <Step title="Chat logs" />
              <Step title="Hosting og implementering" />
              <Step title="Løbende support" />
            </ul>
          </div>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Yderligere funktioner tilføjes efter aftale for at opfylde dine specifikke krav.
          </p>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-96 flex flex-col justify-between">
          <div>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Opgavebaseret betaling
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Kontakt os for et prisestimat:
            <ul className="list-none  mt-2">
              <Step title="Løsningsorienteret pris" />
              <Step title="Fast budget" />
              <Step title="En gang og færdig opgaver" />
              <Step title="Standard løsninger" />
            </ul>
          </div>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Er du usikker eller har du spørgsmål angående vores priser, så tøv ikke med at kontakte os.
          </p>
        </CardSpotlight>
        
      </div>
      
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Prices;