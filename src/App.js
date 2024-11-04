import "./App.css";

import LinkElement from "./Components/linkElement";
import Projects from "./Components/projectsElement";
import Skills from "./Components/skillsElement";
import Contacts from "./Components/contact";
function App() {
  const links = [
    { id: 2, text: "Projects", link: "#Projects" },
    { id: 3, text: "Skills", link: "#Skills" },
  ];

  const linkList = links.map((link) => {
    return <LinkElement key={link.id} text={link.text} link={link.link} />;
  });

  const projects = [
    {
      id: 1,
      text: "BMI Calculator",
      link: "https://alnaji.dev/BMI.github.io/",
    },
    {
      id: 2,
      text: "HanggedMan Game",
      link: "https://alnaji.dev/HanggedMan-Game/",
    },
    { id: 3, text: "PrayerTime", link: "https://alnaji.dev/PrayerTimes/" },
  ];
  const projectList = projects.map((project)=> {
      return(
        <Projects text={project.text} link={project.link} key={project.id} />
      )
  })
  return (
    <div>
      {/* Header is here*/}
      <div
        id="Header"
        className="flex flex-wrap justify-between border-b-2 lg:justify-around"
      >
        <div className="flex flex-none justify-center pl-3 pt-3 p-2">
          <h1 className="text-2xl font-bold">M7mdful</h1>
        </div>
        <div className=" flex flex-wrap justify-center p-2 pt-2 pr-7 gap-5 lg:gap-24 ">
          {linkList}
        </div>
      </div>
      {/*Body is here*/}
      <div className="h-dvh">
        <div id="Info" className="flex flex-wrap justify-center">
          <div className="mt-16 mx-7  flex flex-wrap gap-20  justify-around">
            <div>
              <div className="flex flex-wrap text-pretty gap-6">
                <h1 className="text-4xl font-bold">Hi! I Am</h1>
                <h2 className="text-1xl pt-2 font-semibold bg-indigo-500 p-3 rounded-3xl text-white hover:rounded-sm duration-1000">
                  Jr.Dev
                </h2>
              </div>
              <div className="flex flex-wrap text-pretty">
                <h1 className="text-4xl font-bold">Mohammed Al Naji</h1>
              </div>
              <div className="mt-3">
                <p className="text-pretty text-sm font-semibold">
                  A computer science student with a passion for building
                  innovative and efficient solutions.
                </p>
              </div>
            </div>
            {/*Picture and contact*/}
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap pb-3 justify-center">
                <img
                  className="w-3/5 lg:w-80 hover:scale-105 transform duration-500"
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue02&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Brown"
                />
              </div>
              <div className="mt-2 flex flex-wrap justify-center">
                <a
                  className="bg-indigo-500 p-2 rounded-lg mb-2 text-white hover:scale-110 transform duration-700 font-semibold"
                  href="#Contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Projects Section */}
      <div>
        <div className="flex w-full items-center rounded-full">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="text-black text-2xl font-semibold leading-8 px-8 py-3">
            Projects
          </span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>
      </div>
      {/*Projects Body Section*/}
      <div id="Projects" className="flex flex-wrap justify-center">
        {projectList}
      </div>
      {/*Skills Section */}
      <div>
        <div className="flex w-full items-center rounded-full">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="text-black text-2xl font-semibold leading-8 px-8 py-3">
            Skills
          </span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>
      </div>
      {/*Skills Body Section*/}
      <div id="Skills" className="flex flex-wrap justify-center">
          <Skills/>
      </div>
      {/*Contact Section*/}
      <div id="Contact">
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
