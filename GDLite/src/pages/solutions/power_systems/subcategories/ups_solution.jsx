import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { UPS_SOLUTIONS, UPS_SERVICES, getUpsSolutionBySlug } from '../../../../data/ups_solutions';
import { upsGalleryData } from '../../../../data/ups_gallery';

export default function UpsSolution() {
    const { slug } = useParams();
    const solution = getUpsSolutionBySlug(slug);
    if (!solution) return <Navigate to="/power-systems/ups" replace />;

    return (
        <SolutionDetail
            solution={solution}
            solutions={UPS_SOLUTIONS}
            basePath="/power-systems/ups"
            backLabel="UPS Solutions"
            otherTitle="Explore Other UPS Solutions"
            serviceOptions={UPS_SERVICES}
            defaultService={UPS_SERVICES[0]}
            galleryImages={upsGalleryData[slug]?.images}
            galleryPath={`/gallery/ups/${slug}`}
        />
    );
}