import { 
  SiReact, SiFlask, SiPhp, SiLaravel, SiHtml5, 
  SiCss, SiJavascript, SiMysql, SiPython, SiDjango,
  SiSqlite, SiTailwindcss, SiGit
} from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'

export const skills = [
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'HTML5', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS3', icon: SiCss, category: 'Frontend' },
  { name: 'Python', icon: SiPython, category: 'Backend' },
  { name: 'Flask', icon: SiFlask, category: 'Backend' },
  { name: 'Django', icon: SiDjango, category: 'Backend' },
  { name: 'PHP', icon: SiPhp, category: 'Backend' },
  { name: 'Laravel', icon: SiLaravel, category: 'Backend' },
  { name: 'Filament', icon: TbDatabase, category: 'Backend' },
  { name: 'MySQL', icon: SiMysql, category: 'Data' },
  { name: 'SQLite', icon: SiSqlite, category: 'Data' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
]