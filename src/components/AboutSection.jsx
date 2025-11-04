export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="spave-y-6">
            <h3>Passionate Web Developer & Tech Creator</h3>

            <p>
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant Web
              applications using modern technologies.
            </p>

            <p>
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
