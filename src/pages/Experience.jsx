import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
       <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2016"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
         <h3>
          3rd High School of Petroupolis, Athens Greece  
         </h3>
         <p>High School Diploma</p>
        </VerticalTimelineElement> 
        <VerticalTimelineElement
         className="vertical-timeline-element--education"
         date="2016 - 2022"
         iconStyle={{ background: '#3e497a', color: '#fff' }}
         icon={<SchoolIcon />}
        >
         <h3>
          University of Piraeus, Greece   
         </h3>
         <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree in Digital Systems
         </h4>
         <p>
          School of Information and Communication Technologies majoring Software 
          and Data Systems
         </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" 03/2019 - 06/2020"
          iconStyle={{ background: '#841B2D', color: '#fff' }}
          icon={<WorkIcon />}
        >
         <h3>
          Worker at Allou Fun Park (AVE AE), Athens   
         </h3>
         <p>
           - Customer Service
         </p>
         <p>
           - Machine Operator
         </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className="vertical-timeline-element--work"
         date="07/2020 - 09/2020         "
         iconStyle={{ background: '#841B2D', color: '#fff' }}
         icon={<WorkIcon />}
        >
         <h3>
          Intern at SoftBiz IKE, Athens
         </h3>
         <p>
          - Website development (use of HTML, CSS, JavaScript)
         </p>
         <p>
          - Website Bug Tracking
         </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience