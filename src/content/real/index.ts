import { nextCard } from './nextCard';
import { aurionx } from './aurionx';
import { deepvise } from './deepvise';
import { allweb3 } from './allweb3';
import { budweiser } from './budweiser';
import { cyberorigin } from './cyberorigin';
import { mengniu } from './mengniu';
import { tokenta } from './tokenta';
import type { Project } from './types';

/** Flagship case studies shown prominently on the homepage */
export const flagship: Project[] = [nextCard, aurionx, cyberorigin, deepvise];

/** Additional projects shown in a collapsed "More Work" section */
export const moreWork: Project[] = [allweb3, budweiser, mengniu, tokenta];

/** All projects combined */
export const projects: Project[] = [...flagship, ...moreWork];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export type { Project } from './types';
