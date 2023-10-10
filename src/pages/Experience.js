import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2019-2020" 
        iconStyle={{background : "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
          <h3>My Jijamata Vidya Mandir, Malad East, Maharashtra</h3>
          <p>SSC Schooling</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2020-2023" 
        iconStyle={{background : "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
          <h3>My Thakur College of Science and Commerce, Kandivali East, Maharashtra</h3>
          <p>HSC in Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--work" 
        date="2018-2022" 
        iconStyle={{background : "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
          <h3>Sandip Institute of Technology and Research Center, Nashik, Maharashtra</h3>
          <p>Bachelor of Engineering in Computer Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience