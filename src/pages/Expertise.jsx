import ExpertiseEnd from "../components/ExpertiseEnd"
import ExpertiseStart from "../components/ExpertiseStart"
import TestimonialSlider from '../components/TestimonialSlider';
// import Subscription from "./Subscription";

const Expertise = () => {
  return (
    <div className="expertise-section">
      <ExpertiseStart/>
      <ExpertiseEnd/>
      {/* <Subscription/> */}
      <TestimonialSlider/>
    </div> 
  )
}

export default Expertise