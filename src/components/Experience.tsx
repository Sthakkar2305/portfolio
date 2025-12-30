import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const timelineData = [
  {
    type: 'experience',
    title: 'Freelance Web Developer',
    company: 'Balkrushna Jewellers',
    location: 'Remote',
    duration: 'july-2025 - oct-2025',
    description: 'Independently sourced and delivered a comprehensive e-commerce website project. Led the complete development lifecycle from requirements gathering to deployment.',
    achievements: [
      'Delivered a fully functional e-commerce platform',
      'Implemented secure payment integration',
      'Achieved 99.9% uptime and optimal performance',
      'Maintained ongoing client relationship for updates and support'
    ]
  },
  {
    type: 'experience',
    title: 'Freelance Web Developer',
    company: 'Tapovan School',
    location: 'Gujarat, India',
    duration: 'jan-2025 - Apr-2025',
description: 'Developed a school stock management system to streamline inventory tracking, reporting, and resource allocation.',  
achievements: [
  'Built a web-based platform for managing school inventory',
  'Automated stock tracking and reporting to reduce manual errors',
  'Implemented role-based access for secure and efficient management',
  'Improved overall efficiency of school resource distribution'
]
  },
  {
    type: 'experience',
    title: 'Freelance Web Developer',
    company: 'SONNECT-UTILITIES',
    location: 'Ahemdabad Gujarat, India',
    duration: 'nov-2025 - present',
description: 'Developed the Sonnect Utility – SolarRath-X website, featuring a modern 3D informatics-style interface',  
achievements: [
  'Built the Sonnect Utility SolarRath-X 3D website with an immersive informatics-style design',
  'Implemented interactive 3D components to visualize solar utility systems and information flow',
  'Optimized performance and responsiveness for seamless cross-device user experience',
  'Enhanced digital presence with a futuristic UI emphasizing innovation and clean-energy technology'
]
  },

  {
    type: 'education',
    title: 'Bachelor of Engineering',
    company: 'Sankalchand Patel College Of Engineering',
    location: 'Visnagar, Gujarat',
    duration: '2021 - Present',
    description: 'Pursuing Computer Engineering with focus on software development, data structures, algorithms, and modern web technologies.',
    achievements: [
      'Maintained strong academic performance',
      'Led multiple hackathon teams',
      'Participated in technical competitions',
      'Completed various industry-relevant projects'
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience & Education</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            My professional journey and educational background in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline marker */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    {item.type === 'experience' ? (
                      <Briefcase className="w-7 h-7 text-primary-foreground" />
                    ) : (
                      <GraduationCap className="w-7 h-7 text-primary-foreground" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <Card className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardHeader>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl text-text-primary">{item.title}</CardTitle>
                        <CardDescription className="text-primary font-semibold text-lg">
                          {item.company}
                        </CardDescription>
                        <div className="flex flex-wrap gap-4 text-text-muted">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div>
                        <h4 className="text-text-primary font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-text-secondary flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;