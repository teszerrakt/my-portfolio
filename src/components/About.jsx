const About = () => {
  return (
    <div id="about" className="bg-[#0e0e0e] flex justify-center w-screen px-10">
      <div className="grid max-w-5xl grid-cols-1 py-10 border-t sm:grid-cols-2">
        <div className="flex items-center ">
          <h1 className="text-4xl font-bold pb-11 sm:pb-0 sm:text-6xl text-gradient">
            ABOUT ME
          </h1>
        </div>
        <p className="text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          sapiente possimus officia. Laudantium, in omnis? Dolorum eveniet
          assumenda corrupti est nihil! Possimus, voluptatem voluptate?
          Praesentium odit voluptatibus laborum rerum quod.
        </p>
      </div>
    </div>
  );
};

export default About;
