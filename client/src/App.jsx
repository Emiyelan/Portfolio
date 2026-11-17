import React, {useEffect,useState} from 'react';
import {profile} from './data/profile';
import './index.css';

const skills = {
  'Data Engineering': ['Microsoft Fabric', 'OneLake', 'Lakehouse', 'Warehouse', 'Data Factory', 'ETL / ELT', 'Data Pipelines', 'Data Modelling'],
  'Azure & Analytics': ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Spark SQL', 'Power BI', 'SAP integration exposure'],
  'Languages & Databases': ['SQL', 'T-SQL', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL Server', 'PostgreSQL', 'MongoDB'],
  'Software Engineering': ['ASP.NET Core / MVC', 'REST APIs', 'Node.js', 'Express', 'React', 'Data Validation', 'Deduplication'],
  'Tools & Delivery': ['Git', 'GitHub', 'Azure DevOps', 'CI/CD', 'Unit & API Testing', 'Agile / Scrum', 'Jira']
};

const experience = [
  {
    company: 'ADigital Pty Ltd',
    role: 'Data/Software Engineer',
    dates: 'Aug 2026 – Present',
    details: [
      'Worked with Azure Data Factory and Azure Databricks on data processing workflows, with SQL and Power BI for reporting.',
      'Refined SQL queries and reporting datasets and investigated data quality and performance issues.',
      'Gained hands-on exposure to SAP data integration and worked with stakeholders to clarify data requirements.',
      'Supported testing, documentation and reviews of data solutions, drawing on Microsoft Fabric knowledge.'
    ],
    tags: ['Azure Data Factory', 'Azure Databricks', 'SQL', 'Power BI']
  },
  {
    company: 'MIP Holdings',
    role: 'Software Engineer',
    dates: 'Jan 2023 – Jan 2026',
    details: [
      'Maintained healthcare claims and authorisation systems using C#, ASP.NET Core/MVC, SQL Server and REST APIs.',
      'Used SQL and Python to validate incoming claims and detect duplicates before storage.',
      'Investigated rejection logs and failed file loads and built operational reporting menus accessible through PuTTY.',
      'Cut report generation time from about 2 minutes 45 seconds to 40 seconds by tuning SQL queries and indexes and refactoring backend code.',
      'Fixed production authorisation defects with configurable, data-driven business rules.'
    ],
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Python']
  },
  {
    company: 'Mapapa Solutions',
    role: 'Junior Software Developer',
    dates: 'Mar 2021 – Aug 2022',
    details: [
      'Built and maintained React interfaces and connected them to Node.js and Express REST APIs.',
      'Supported MongoDB data models, troubleshooting, testing, deployments and technical documentation.'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB']
  }
];

const credentials = [
  { issuer: 'Microsoft', title: 'Fabric Data Engineer Associate', detail: 'DP-700' },
  { issuer: 'Microsoft', title: 'Azure Databricks Data Engineer Associate', detail: 'DP-750' },
  { issuer: 'DataCamp', title: 'Data Engineering in Python' },
  { issuer: 'Tshwane University of Technology', title: 'Diploma in Computer Systems Engineering', detail: '2018–2022' }
];
const fallback = [{id:1,name:'Market Place Project',description:'Full-stack marketplace application.',html_url:'https://github.com/Emiyelan',homepage:'https://market-place-project-46so.onrender.com',language:'JavaScript'},{id:2,name:'Portfolio',description:'Personal portfolio built with React.',html_url:'https://github.com/Emiyelan/Portfolio',language:'React'}];
function Icon({name}) { const icons={github:'↗',linkedin:'in',mail:'✉',pin:'⌖',arrow:'↗',sun:'☀',moon:'☾',download:'↓'}; return <span aria-hidden="true">{icons[name]||'↗'}</span> }
function Section({id,heading,children}){return <section id={id} className="section"><h2>{heading}</h2>{children}</section>}
function App(){
 const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('portfolio-theme')|| (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{return 'light'}});
 const [projects,setProjects]=useState(fallback);
 const [open,setOpen]=useState(0);
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme)},[theme]);
 useEffect(()=>{const controller=new AbortController();fetch('https://api.github.com/users/Emiyelan/repos?sort=updated&per_page=30',{signal:controller.signal}).then(r=>{if(!r.ok)throw Error('GitHub unavailable');return r.json()}).then(data=>{const repos=data.filter(p=>!p.fork).sort((a,b)=>Number(Boolean(b.description))-Number(Boolean(a.description))).slice(0,6).map(p=>({...p,homepage:p.name.toLowerCase().includes('market-place')?'https://market-place-project-46so.onrender.com':p.homepage}));if(repos.length)setProjects(repos)}).catch(()=>{});return()=>controller.abort()},[]);
 return <div className="site-shell"><header className="mobile-header"><a href="#home" className="brand">EM<span>.</span></a><button className="theme-button" onClick={()=>setTheme(t=>t==='light'?'dark':'light')} aria-label="Toggle colour theme"><Icon name={theme==='light'?'moon':'sun'}/></button></header>
 <div className="layout"><aside className="sidebar"><div className="profile-card"><img className="portrait" src="/profile.jpg" alt="Portrait of Emmanuel Makaringe"/><div className="profile-content"><span className="availability"><span className="status-dot"/> Open to opportunities</span><h1>Emmanuel<br/>Makaringe<span className="accent">.</span></h1><p className="role">{profile.title}</p><p className="location"><Icon name="pin"/> Fourways, Gauteng, South Africa</p></div></div><div className="sidebar-card"><a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github"/> GitHub <span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin"/> LinkedIn <span>↗</span></a><a href={`mailto:${profile.email}`}><Icon name="mail"/> Email <span>↗</span></a><a className="contact-button" href="#contact">Contact <span>↗</span></a></div><div className="sidebar-bottom"><button className="theme-button" onClick={()=>setTheme(t=>t==='light'?'dark':'light')} aria-label="Toggle colour theme"><Icon name={theme==='light'?'moon':'sun'}/> {theme==='light'?'Dark mode':'Light mode'}</button><span>© {new Date().getFullYear()} Emmanuel</span></div></aside>
 <main id="home" className="main-content"><nav className="top-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
 <Section id="about" heading="About me"><p className="intro">I'm a data engineer and software engineer. I work on data pipelines, reporting and production applications.</p><p className="body-copy">At ADigital, I work with Azure Data Factory, Databricks, SQL and Power BI on data processing and reporting. At MIP Holdings, I used SQL and Python to validate claims data and cut a production report from about 2 minutes 45 seconds to 40 seconds.</p><div className="action-row"><a className="primary-btn" href="#projects">View projects <Icon name="arrow"/></a><a className="outline-btn" href="/Emmanuel_Miyelani_Makaringe_Resume.pdf" download>Download CV <Icon name="download"/></a></div></Section>
 <Section id="experience" heading="Where I've worked"><div className="experience-list">{experience.map((job,i)=><article className={'experience-item '+(open===i?'expanded':'')} key={job.company}><button className="experience-toggle" onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span className="company-mark">{job.company.slice(0,1)}</span><span className="experience-title"><strong>{job.company}</strong><small>{job.role}</small></span><span className="dates">{job.dates}</span><span className="chevron">⌄</span></button>{open===i&&<div className="experience-details"><ul>{job.details.map(x=><li key={x}>{x}</li>)}</ul><div className="tag-list">{job.tags.map(t=><span key={t}>{t}</span>)}</div></div>}</article>)}</div></Section>
 <Section id="projects" heading="Projects"><div className="projects-grid">{projects.map(p=><article className="project-card" key={p.id}><h3>{p.name.replace(/[-_]/g,' ')}</h3>{p.description && <p>{p.description}</p>}<div className="project-bottom">{p.language && <span className="skill-pill">{p.language}</span>}<div><a href={p.html_url} target="_blank" rel="noreferrer">Code ↗</a>{p.homepage&&<a href={p.homepage} target="_blank" rel="noreferrer">Demo ↗</a>}</div></div></article>)}</div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">View all repositories on GitHub ↗</a></Section>
 <Section id="skills" heading="Skills"><div className="skills-grid">{Object.entries(skills).map(([category,items])=><article className="skill-card" key={category}><h3>{category}</h3><div className="tag-list">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></Section>
 <Section id="certifications" heading="Certifications & education">{credentials.map(({issuer, title, detail}) => <article className="credential-card" key={title}><div><span className="credential-label">{issuer}</span><h3>{title}</h3>{detail && <p>{detail}</p>}</div></article>)}</Section>
 <Section id="contact" heading="Contact"><p className="body-copy">I'm open to data engineering and software engineering roles.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a></Section><footer>Emmanuel Makaringe</footer>
 </main></div></div>
}
export default App;
