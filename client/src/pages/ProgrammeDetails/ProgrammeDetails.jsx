import { useParams } from "react-router-dom";
import programmes from "../../data/programmes";
import ProgrammeBanner from "../../components/ProgrammeBanner/ProgrammeBanner";
import ProgrammeStats from "../../components/ProgrammeStats/ProgrammeStats";
import ProgrammeEvents from "../../components/ProgrammeEvents/ProgrammeEvents";
import VolunteerCTA from "../../components/VolunteerCTA/VolunteerCTA";
import DonationSection from "../../components/DonationSection/DonationSection";
import ProgrammeWhy from "../../components/ProgrammeWhy/ProgrammeWhy";

function ProgrammeDetails() {
  const { category } = useParams();

  const programme = programmes[category];

  if (!programme) {
    return (
      <div className="text-center mt-20 text-3xl">
        Programme Not Found
      </div>
    );
  }

 return (
  <div>

    <ProgrammeBanner programme={programme} />

    <ProgrammeWhy programme={programme} />

    <ProgrammeStats stats={programme.stats} />

    <ProgrammeEvents programme={programme} />

    <VolunteerCTA programme={programme} />

    <DonationSection programme={programme} />

  </div>
);
}

export default ProgrammeDetails;