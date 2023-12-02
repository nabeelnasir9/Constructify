// import { useEffect } from 'react';
// import '../styles/Projects.css'; // Create this CSS file for styling

// const Projects = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const projectsContainer = document.getElementById('projects-container');
//       const scrollThreshold = projectsContainer.offsetWidth; // Adjust as needed

//       // Enable horizontal scrolling if the user scrolls beyond the threshold
//       if (window.scrollY >= scrollThreshold) {
//         projectsContainer.style.overflowX = 'scroll';
//       } else {
//         projectsContainer.style.overflowX = 'hidden';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div id="projects-container" className="projects-container">
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//       <div className="cards-wrapper">
//         {/* Your cards go here */}
//         <div className="card">
//           <img src="your-image-url" alt="Project Image" />
//           <p>Project Description</p>
//         </div>
//         {/* Repeat for other cards */}
//       </div>
//     </div>
//   );
// };

// export default Projects;