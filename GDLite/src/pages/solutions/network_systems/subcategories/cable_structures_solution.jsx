import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { getNetworkCategoryBySlug } from '../../../../data/network_data';
import {
    CABLE_STRUCTURES_SOLUTIONS,
    getCableStructuresSolutionBySlug,
} from '../../../../data/cable_structures_solutions';

export default function CableStructuresSolution() {
    const { slug } = useParams();
    const solution = getCableStructuresSolutionBySlug(slug);
    const category = getNetworkCategoryBySlug('cable-structures');
    if (!solution) return <Navigate to="/network-systems/cable-structures" replace />;

    const subs = category?.subcategories ?? [];

    return (
        <SolutionDetail
            theme="dark"
            solution={solution}
            solutions={CABLE_STRUCTURES_SOLUTIONS}
            basePath="/network-systems/cable-structures"
            backLabel="Cable Structures"
            otherTitle="Explore Other Cable Structure Solutions"
            serviceOptions={subs.map((s) => s.title)}
            defaultService={
                subs.find((s) => s.title.toLowerCase() === solution.title.toLowerCase())?.title ?? solution.title
            }
            galleryCategory="cable-structures"
        />
    );
}