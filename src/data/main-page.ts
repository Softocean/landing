import { PortfolioSlideProps } from '@/types/types';
import heromatch_lite from '../../assets/projects/heromatch_lite.png';
import incosplay_lite from '../../assets/projects/incosplay_lite.png';
import lks from '../../assets/projects/lks.png';
import backbar from '../../assets/projects/logo_backbar.png';
import datalorian from '../../assets/projects/logo_datalorian.png';
import onetask from '../../assets/projects/logo_onetask.png';
import tailbook from '../../assets/projects/partner_tailbook.png';
import reeder from '../../assets/projects/reeder.png';
import votetime from '../../assets/projects/votetime.png';

// Наши проекты (для слайдера)
export const slides_products: PortfolioSlideProps[] = [
  {
    id: 1,
    type: 'Soft',
    title: 'BackBar',
    subtitle: 'HORECA crm',
    link: '/products/backbar',
    image: backbar,
  },
  {
    id: 2,
    type: 'Soft',
    title: 'One task',
    subtitle: 'Task manager',
    link: '/products/one-task',
    image: onetask,
  },
  {
    id: 3,
    type: 'Soft',
    title: 'Datalorean',
    subtitle: 'Data analytics',
    link: '/products/datalorian',
    image: datalorian,
  },
  {
    id: 4,
    type: 'Social Technology',
    title: 'TAILBOOK',
    subtitle: 'Stray animal service',
    link: '/products/tailbook',
    image: tailbook,
  },
];

export const slides_projects: PortfolioSlideProps[] = [
  {
    id: 1,
    type: 'Social Media Platform',
    title: 'INCOSPLAY',
    subtitle: 'Task manager',
    link: '/projects/incosplay',
    image: incosplay_lite,
  },
  {
    id: 6,
    type: 'E-commerce',
    title: 'Little Knits Story',
    subtitle: 'Blog and shop about knitting',
    link: '/projects/little-knits-story',
    image: lks,
  },
  {
    id: 3,
    type: 'Social Media Platform',
    title: 'REEDER',
    subtitle: 'Feed for TG channels',
    link: '/projects/reeder',
    image: reeder,
  },
  {
    id: 4,
    type: 'App',
    title: 'HEROMATCH',
    subtitle: 'Productivity tool, Entertaimant',
    link: '/projects/heromatch',
    image: heromatch_lite,
  },
  {
    id: 5,
    type: 'b2b',
    title: 'VOTETIME',
    subtitle: 'Task manager',
    link: '/projects/votetime',
    image: votetime,
  },
];

/* export const slides_partners: PartnerSlideProps[] = []; */
