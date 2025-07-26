import { client } from '@/lib/sanity';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/components/ProjectGrid.module.css';

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    "imageUrl": mainImage.asset->url
  }`;
  const projects = await client.fetch(query);
  return projects;
}

export default async function ProjetosPage() {
  const projects = await getProjects();

  return (
    <section className={styles.projectSection}>
      <h1 className={styles.sectionTitle}>Nossos Projetos</h1>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard
            key={project._id}
            title={project.title}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}