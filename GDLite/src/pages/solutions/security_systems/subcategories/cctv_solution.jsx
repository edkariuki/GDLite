import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import { buildCctvSolution } from '../../../../data/cctv_solutions';

export default function CctvSolution() {
    const { slug } = useParams();
    const category = getSecurityCategoryBySlug('cctv');
    const subs = category?.subcategories ?? [];
    const sub = subs.find((s) => s.slug === slug);

    if (!sub) return <Navigate to="/security-systems/cctv" replace />;

    return (
        <SolutionDetail
            theme="accent"
            solution={buildCctvSolution(sub)}
            solutions={subs.map(buildCctvSolution)}
            basePath="/security-systems/cctv"
            backLabel="CCTV Solutions"
            otherTitle="Explore Other CCTV Solutions"
            serviceOptions={subs.map((s) => s.title)}
            defaultService={sub.title}
            galleryImages={sub.gallery}
        />
    );
}