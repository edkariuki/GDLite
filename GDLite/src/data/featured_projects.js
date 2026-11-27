import { solarGalleryData } from './solar_gallery';
import { accessControlGalleryData } from './access_control_gallery';
// import { cctvGalleryData } from './cctv_gallery';   // add once it exists

const take = (data, key, n = 1) => (data[key]?.images ?? []).slice(0, n);

// A mix across categories. Change the keys and counts to showcase your best work.
export const featuredProjects = [
    ...take(solarGalleryData, 'hybrid', 2),
    ...take(solarGalleryData, 'off-grid', 1),
    ...take(accessControlGalleryData, 'commercial', 1),
    ...take(accessControlGalleryData, 'residential', 1),
    // ...take(cctvGalleryData, 'some-key', 1),
];