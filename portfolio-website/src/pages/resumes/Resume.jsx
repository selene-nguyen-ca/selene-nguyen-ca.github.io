import "./Resume.css";
import ResumePDF from "../../assets/documents/SeleneNguyenResume.pdf";
function Resume() {
  return (
    <main className="resume-page">
      <iframe
        src={ResumePDF}
        title="Selene Nguyen Resume"
        className="resume-pdf"
      />
    </main>
  );
}

export default Resume;
