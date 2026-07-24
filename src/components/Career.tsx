import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>


          {/* Current */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>Narula Institute of Technology, Kolkata</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>

            <p>
              Currently pursuing B.Tech in Information Technology through
              Lateral Entry. Passionate about Full Stack Web Development,
              Artificial Intelligence, MERN Stack, Java, Python and solving Data
              Structures & Algorithms problems.
            </p>
          </div>

          {/* Diploma */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science & Technology</h4>
                <h5>Berhampore Polytechnic college</h5>
              </div>
              <h3>2022 – 2025</h3>
            </div>

            <p>
              Completed Diploma in Computer Science & Technology. Built multiple
              academic and personal projects while gaining strong knowledge of
              Programming, Database Management Systems, Operating Systems,
              Computer Networks and Web Development.
            </p>
          </div>

          {/* Hackathons */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons & Projects</h4>
                <h5>National Level Participation</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>

            <p>
              Developed multiple Full Stack MERN applications including
              ExamPulse, CivicFix AI, VibeTalk, TaskVerse and Zenvyra.
              Participated in national hackathons including Gemma for Bharat
              Hackathon and built AI-powered real-world solutions.
            </p>
          </div>

          {/* Achievements */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements</h4>
                <h5>Learning & Competitive Programming</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>

            <p>
              Solved 100+ Data Structures & Algorithms problems, earned
              certifications in Java Programming, and continuously improving
              expertise in Full Stack Development, AI, Cloud Technologies and
              Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
