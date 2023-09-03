import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-cols justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div className="relative" variants={projectVariant}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 text-center mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="">
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="my-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            subtitle={
              "Doggo ipsum such treat smol floofs heckin angery woofer, pats shibe. He made many woofs"
            }
          />
          <Project
            title="Project 2"
            subtitle={
              "Cat ipsum: Hate dog. Drink from the toilet dream about hunting birds"
            }
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            subtitle={
              "There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all."
            }
          />
          <Project
            title="Project 4"
            subtitle={
              "A billion trillion Sea of Tranquility permanence of the stars Rig Veda radio telescope tesseract?"
            }
          />
          <Project
            title="Project 5"
            subtitle={
              "We're a most promising species, Mr. Spock, as predators go. Did you know that?"
            }
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            subtitle={
              "Some whites age better in stainless steel. Red table wine is not made from red tables."
            }
          />
          <Project
            title="Project 7"
            subtitle={
              "Pecorino goat melted cheese mozzarella jarlsberg mascarpone queso macaroni cheese. Smelly cheese"
            }
          />

          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
