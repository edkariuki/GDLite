import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import {
    ELECTRIC_FENCE_SOLUTIONS,
    getElectricFenceSolutionBySlug,
} from '../../../../data/electric_fence_solutions';

export default function ElectricFenceSolution() {
    const { slug } = useParams();
    const solution = getElectricFenceSolutionBySlug(slug);
    const category = getSecurityCategoryBySlug('electric-fence');
    if (!solution) return <Navigate to="/security-systems/electric-fence" replace />;

    return (
        <SolutionDetail
            theme="accent"
            solution={solution}
            solutions={ELECTRIC_FENCE_SOLUTIONS}
            basePath="/security-systems/electric-fence"
            backLabel="Electric Fence Solutions"
            otherTitle="Explore Other Electric Fence Solutions"
            serviceOptions={(category?.subcategories ?? []).map((s) => s.title)}
            defaultService={
                (category?.subcategories ?? []).find(
                    (s) => s.title.toLowerCase() === solution.title.toLowerCase()
                )?.title ?? solution.title
            }
            galleryCategory="electric-fence"
        />
    );
}