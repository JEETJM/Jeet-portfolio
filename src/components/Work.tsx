import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ExamPulse",
    category: "Full Stack Online Examination Platform",
    tools:
      "React • Node.js • Express.js • MongoDB • JWT Authentication • REST API",
    image: "/images/exampulse.png",
    link: "https://exampulse-y3os.onrender.com/",
  },
  {
    title: "Online Exam System",
    category: "Web Based Examination System",
    tools:
      "React • Node.js • Express.js • MongoDB • Authentication • Result Management",
    image: "/images/online-exam-system.png",
    link: "https://online-exam-system-202c.onrender.com/",
  },
  {
    title: "Zenvyra",
    category: "Property Listing Platform",
    tools: "React • Node.js • MongoDB • Cloudinary • Maps API • Authentication",
    image: "/images/zenvyra.png",
    link: "https://zenvyra-app.onrender.com/",
  },
  {
    title: "TaskVerse",
    category: "Professional MERN Task Manager",
    tools:
      "React • Express.js • MongoDB Atlas • CRUD • Priority Tracking • Filters",
    image: "/images/taskVerse.png",
    link: "https://taskverse-todo.onrender.com/",
  },
  {
    title: "VibeTalk",
    category: "Real-Time Chat Application",
    tools: "React • Socket.io • Node.js • Express.js • MongoDB • Image Sharing",
    image: "/images/vibetalk.png",
    link: "https://vibetalk-mern-chat.onrender.com/",
  },
  {
    title: "CivicFix AI",
    category: "AI Powered Civic Complaint Platform",
    tools:
      "React • Node.js • Express.js • MongoDB • Gemini AI • Dashboard • Maps",
    image: "/images/civicfix-ai.png",
    link: "https://civicfix-ai-jmdz.onrender.com/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating],
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous Project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          {/* Right Arrow */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next Project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Carousel */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">{project.category}</p>

                        <div className="carousel-tools">
                          <span className="tools-label">Technologies Used</span>

                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
