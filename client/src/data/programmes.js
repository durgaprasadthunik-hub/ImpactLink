import education1 from "../assets/images/programmes/education1.jpg";
import education2 from "../assets/images/programmes/education2.jpg";
import education3 from "../assets/images/programmes/education3.jpg";
import healthcare1 from "../assets/images/programmes/healthcare1.webp"; 
import healthcare2 from "../assets/images/programmes/healthcare2.webp"; 
import healthcare3 from "../assets/images/programmes/healthcare3.webp";
const programmes = {
  education: {
    title: "Education",
    description:
      "Empowering children through quality education, literacy, mentoring and digital learning.",

    images: [
    education1,
    education2,
    education3
  ],  

    banner:
      education1,
    why:
        "If we need to address healthcare, poverty, population control, unemployment and human rights, there's no better way to start than providing education to children in need. Education not only empowers children to have a secure future but also helps them grow up as responsible national and global citizens. The Right to Education (RTE) Act which came into force in 2010 made education free and compulsory for all children in the age group of 6-14 years. But even a decade later, the learning curve has not been steady for many children in the country. The socio-economic conditions of parents and lack of proper learning in schools are hindrances which prevent many children from having education.",

    stats: {
      events: 24,
      volunteers: 520,
      beneficiaries: 3200,
      hours: 8400,
    },

    donateTitle: "Support Education",
  },

  healthcare: {
      title: "Healthcare",
      
      description:
      "Providing healthcare support through medical camps, awareness drives and blood donation.",
      
      images: [
      healthcare1,
      healthcare2,
      healthcare3
    ],
    banner:
      healthcare1,
      
     why:
    "With a population of more than 1.4 Billion, last-mile delivery of healthcare in our country is a big challenge. The geospatial diversity of the country further aggravates the issues of accessibility and availability of healthcare in difficult terrains. With more than 65% of the population residing in rural areas with a smaller share of the overall healthcare infrastructure, and the urban slum dwellers prioritising everyday survival over healthcare, uneven distribution and lack of awareness also limit the uptake of existing healthcare services. It is crucial to address these gaps to meet the goals of Universal Health Coverage and support the Government of India's vision of Ayushman Bharat.",

    
    stats: {
      events: 18,
      volunteers: 350,
      beneficiaries: 11000,
      hours: 5000,
    },

    donateTitle: "Support Healthcare",
  },

  environment: {
    title: "Environment",

    description:
      "Building a greener future through tree plantation and clean-up drives.",

    why:
    "Environmental protection is essential for maintaining the balance of nature and ensuring a sustainable future for generations to come. Rapid urbanization, deforestation, pollution, and climate change have created serious challenges that impact biodiversity, natural resources, and human health.\n\nProtecting the environment through tree plantation, waste management, conservation activities, and awareness programs helps reduce environmental damage and promotes a healthier planet. Community participation plays a vital role in creating sustainable solutions and encouraging responsible practices.\n\nBy working together, individuals and communities can contribute to cleaner surroundings, preserve natural ecosystems, and build a greener and more sustainable world for everyone.",  
  

    banner:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",

    stats: {
      events: 40,
      volunteers: 900,
      beneficiaries: 6000,
      hours: 12000,
    },

    donateTitle: "Support Environment",
  },

  "women empowerment": {
    title: "Women Empowerment",

    description:
      "Creating opportunities through education, skill development and awareness.",

    banner:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",

     why:
    "Over the past decade, gender equality has emerged as a critical factor not only for the health of nations but also for their social and economic advancement. Promoting gender equality and women empowerment is central to the UNDP’s Sustainable Development Goals. Women empowerment focuses on ensuring equal rights, opportunities, and access to resources for women, allowing them to make independent decisions and take charge of their own lives.\n\nWhen women empowerment is prioritized, women significantly contribute to economic growth, social development, and a sustainable future. Empowered women take active roles in leadership, education, healthcare, and decision-making at various levels. Women empowerment helps create a more inclusive and balanced society where women’s voices are valued, their skills are recognized, and their potential is fully realized.\n\nUltimately, women empowerment is essential for building a fairer and more harmonious world for everyone.",
  

    stats: {
      events: 12,
      volunteers: 270,
      beneficiaries: 1500,
      hours: 3900,
    },

    donateTitle: "Support Women Empowerment",
  },

  food: {
    title: "Food Distribution",

    description:
      "Providing nutritious meals to families facing hunger and food insecurity.",

    banner:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",

    why:
  "Food is a basic human right, yet millions of people around the world continue to face hunger and food insecurity. Poverty, unemployment, natural disasters, and limited access to resources prevent many families from having regular access to nutritious meals.\n\nFood distribution programs play an important role in supporting vulnerable communities by providing essential nutrition and reducing hunger. These initiatives not only help people meet their immediate needs but also promote dignity, health, and overall well-being.\n\nThrough community participation and volunteer efforts, food distribution initiatives create a positive impact by ensuring that no one is left behind and helping build a more caring and inclusive society.",  

    stats: {
      events: 30,
      volunteers: 600,
      beneficiaries: 15000,
      hours: 7000,
    },

    donateTitle: "Support Food Distribution",
  },

  community: {
    title: "Community Service",

    description:
      "Strengthening communities through volunteer-driven social initiatives.",

    banner:
      "https://images.unsplash.com/photo-1469571486292-b53601020f36",

    why:
  "Community service plays a vital role in creating stronger, more connected, and supportive communities. Many social challenges such as poverty, lack of awareness, and limited access to resources can be addressed when individuals come together and actively participate in meaningful initiatives.\n\nThrough volunteering, awareness programs, skill-sharing, and social welfare activities, community service helps improve the quality of life for people while encouraging empathy, responsibility, and teamwork. It provides individuals with opportunities to contribute their time and skills toward creating positive change.\n\nBy building a culture of volunteering and collective action, community service strengthens relationships, empowers communities, and creates a more inclusive and sustainable society for everyone.",  

    stats: {
      events: 28,
      volunteers: 480,
      beneficiaries: 5200,
      hours: 6500,
    },

    donateTitle: "Support Community Service",
  },
};

export default programmes;