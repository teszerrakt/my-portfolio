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
          Hello, my name is Zaky Syihab Hatmoko. I am a final year undergraduate
          student attending Computer Science Major at Universitas Gadjah Mada.
          <br />
          I love to create a beautiful and functional website to use from mobile
          to desktop.
          <br />I am passionate about learning new things, currently engrossed
          in Frontend Web Development.
        </p>
      </div>
    </div>
  );
};

export default About;
