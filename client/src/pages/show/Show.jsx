import "./show.css";
import Singlepost from "../../components/singlepost/Singlepost";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Show() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
}
