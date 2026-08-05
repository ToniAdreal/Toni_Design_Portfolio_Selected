import { nextCard } from './nextCard';
import { aurionx } from './aurionx';
import { deepvise } from './deepvise';
import { allweb3 } from './allweb3';
import { budweiser } from './budweiser';
import { cyberorigin } from './cyberorigin';
import { mengniu } from './mengniu';
import { tokenta } from './tokenta';
import type { Project } from './types';

export const projects: Project[] = [nextCard, aurionx, deepvise, allweb3, budweiser, cyberorigin, mengniu, tokenta];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export type { Project } from './types';
