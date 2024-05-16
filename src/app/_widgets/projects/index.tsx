import Project from '@/app/_components/project'
import Link from 'next/link'
import { getData } from '@/utils/fetch_page'


const Projects = async () => {
  const endpoint = '/api/projects?fields[2]=technologiesUsed&fields[3]=servicesProvided&populate[teaserImage][fields][0]=formats&fields[0]=title&fields[1]=slug&fields[4]=introGradientColor&sort=projectYear:DESC'
  const { data } = await getData(endpoint)

  return (
    <section className="projects">
        <div className='m-auto mt:12 lg:mt-24 max-w-[1340px] sm:grid md:grid-cols-2 gap-8 lg:gap-16 p-4'>
          {data?.length > 0 && data.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </section>
  )
}

export default Projects