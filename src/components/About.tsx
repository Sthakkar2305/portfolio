import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '@/assets/smit.jpeg';

const skills = [
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Express.js", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "JavaScript", level: 95 }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl glass-effect p-2">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl" />
              <img
                src={profileImage}
                alt="Smit Thakkar - Full Stack Developer"
                className="w-full h-auto rounded-xl object-cover shadow-lg relative z-10"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full blur-xl opacity-60" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-xl opacity-40" />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p className="text-lg">
                I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with 
                extensive experience in creating dynamic, user-centric web applications. My journey in web 
                development has been driven by a love for clean code, innovative solutions, and delivering 
                exceptional user experiences.
              </p>
              
              <p>
                With expertise in modern technologies like <span className="text-accent font-semibold">React.js</span>, 
                <span className="text-accent font-semibold"> Node.js</span>, and 
                <span className="text-accent font-semibold"> MongoDB</span>, I've successfully delivered 
                live projects including e-commerce platforms, educational websites, and productivity applications.
              </p>
              
              <p>
                Beyond development, I've demonstrated leadership skills by leading teams in hackathons and 
                collaborating with clients to transform their visions into reality. I believe in continuous 
                learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Technical Skills</h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-text-primary font-medium">{skill.name}</span>
                      <span className="text-text-muted text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-surface-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;