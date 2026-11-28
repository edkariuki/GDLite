import { solarGalleryData } from './solar_gallery';
import { accessControlGalleryData } from './access_control_gallery';
// import { cableStructuresGalleryData } from './cable_structures_gallery';

const pick = (data, key, category, caption, n = 2) =>
    (data[key]?.images ?? []).slice(0, n).map((i) => ({
        src: typeof i === 'string' ? i : i.src,
        caption: (typeof i === 'object' && i.caption) || caption,
        category,
    }));

const power = pick(solarGalleryData, 'hybrid', 'power', 'Hybrid solar installation');
const security = pick(accessControlGalleryData, 'commercial', 'security', 'Commercial access control');
const network = []; // e.g. pick(cableStructuresGalleryData, 'commercial', 'network', 'Structured cabling')

// Interleave so the loop alternates between categories
const maxLen = Math.max(power.length, security.length, network.length);
export const featuredProjects = Array.from({ length: maxLen }, (_, i) =>
    [power[i], security[i], network[i]].filter(Boolean)
).flat();