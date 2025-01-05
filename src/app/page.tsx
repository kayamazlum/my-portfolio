// 'use client';
// import About from '@/components/About';
// import Banner from '@/components/Banner';
// import Contact from '@/components/Contact';
// import Portfolio from '@/components/Portfolio';
// import { IProjectItem } from '@/models/projects';
// import { getAllProjectsServices } from '@/services/projects';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [allProjects, setAllProjects] = useState<IProjectItem[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const projectsData = await getAllProjectsServices();
//       console.log('Project Data', projectsData);
//       if (projectsData?.data.projects.length > 0) {
//         setAllProjects(projectsData?.data.projects);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="bg-customLight mx-auto ">
//       <Banner />
//       <Portfolio allProjects={allProjects} />
//       <About />
//       <Contact />
//     </div>
//   );
// }

import About from '@/components/About';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Portfolio';
import { IProjectItem } from '@/models/projects';
import { getAllProjectsServices } from '@/services/projects';

// Server Component
export default async function Home() {
  // API'den projeleri al
  const projectsData = await getAllProjectsServices();
  const allProjects: IProjectItem[] = projectsData?.data?.projects || [];

  return (
    <div className="bg-customLight mx-auto">
      <Banner />
      <Portfolio allProjects={allProjects} />
      <About />
      <Contact />
    </div>
  );
}
