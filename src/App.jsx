import * as images from "./assets";

function App() {
  function HandleMouseMove(e) {
    for (const element of e.currentTarget.children) {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  return (
    <div id="highlights" onMouseMove={HandleMouseMove}>
      <div className="card fadeIn">
        <div>
          <div
            style={{
              backgroundImage: `url(${images.headstarter})`,
              backgroundColor: "rgb(5, 8, 18)",
              backgroundSize: "125%",
            }}
          />
          <div>
            <div>
              <p className="softHighlight smallHeader centerText">
                SOFTWARE ENGINEERING FELLOW
              </p>
            </div>
            <p>
              In the summer of 2023, I worked at Headstarter as the Head
              Developer in a three-person team. I led the team to successfully
              complete all three full-stack projects we were assigned,
              demonstrating strong team leadership, adaptability, and resilience
              by quickly learning new tools and languages and consistently
              delivering high-quality work under tight deadlines, even as a
              beginner.
            </p>
          </div>
        </div>
      </div>
      <div className="card fadeIn">
        <div>
          <div
            style={{
              backgroundImage: `url(${images.cloud9})`,
              backgroundSize: "80%",
              boxSizing: "border-box",
              border: "15px #085585ff solid",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
          />
          <div>
            <div>
              <p className="softHighlight smallHeader centerText">
                JUNIOR IT TECHNICIAN
              </p>
            </div>
            <p>
              In 11th grade, I completed my co-op term at Cloud9, an IT company,
              and was later hired as a Junior IT Technician. During my two years
              there, I worked with a variety of clients across Ontario, gaining
              hands-on experience in tasks such as network infrastructure
              planning, cabling and wiring, antenna installations, and other
              technical projects, which strengthened my technical and
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
      <div className="card fadeIn">
        <div>
          <div
            style={{
              backgroundImage: `url(${images.yrhacks})`,
              backgroundColor: "rgb(6, 4, 41)",
              backgroundSize: "40%",
            }}
          />
          <div>
            <div>
              <p className="softHighlight smallHeader centerText">
                LOGISTICS & OUTREACH EXECUTIVE
              </p>
            </div>
            <p>
              I served on the executive team for YRHacks, Canada’s largest
              hackathon organization exclusively for high school students. In
              2024, I contributed to logistics, ensuring smooth event
              coordination, and in 2025, I led outreach efforts, securing
              sponsorships and fostering community engagement. My work helped
              support the overall quality, organization, and success of both
              events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
