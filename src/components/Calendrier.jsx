
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CalendrierComponent from "./CalendrierComponent";

const Calendrier = () => {
  return (
    <div>
      <Navigation/>
      <CalendrierComponent/>
     {/* <div className="events-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "wrap", width: "100%" }}>
  <div className="event1" style={{ width: "20px", height: "20px", backgroundColor: "#ff7f50", margin: "10px" }}></div>
  <div className="event2" style={{ width: "20px", height: "20px", backgroundColor: "#77dd77", margin: "10px" }}></div>
  <div className="event3" style={{ width: "20px", height: "20px", backgroundColor: "#ff6961", margin: "10px" }}></div>
  <div className="event4" style={{ width: "20px", height: "20px", backgroundColor: "#87cefa", margin: "10px" }}></div>
</div> */}
<div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <div className="event1" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "10px", backgroundColor: "#ff7f50" }}></div>
        <p style={{ margin: 0 }}>Deadline to register for a course</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <div className="event2" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "10px", backgroundColor: "#77dd77" }}></div>
        <p style={{ margin: 0 }}>Course starting</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <div className="event3" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "10px", backgroundColor: "#ff6961" }}></div>
        <p style={{ margin: 0 }}>Course ending</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <div className="event4" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "10px", backgroundColor: "#87cefa" }}></div>
        <p style={{ margin: 0 }}>Course exam</p>
      </div>


      
      <Footer />
    </div>
  );
};



export default Calendrier;