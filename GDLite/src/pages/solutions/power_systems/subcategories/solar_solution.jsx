import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { getCategoryBySlug } from '../../../../data/data';
import { SOLAR_SOLUTIONS, getSolarSolutionBySlug } from '../../../../data/solar_solutions';

export default function SolarSolution() {
    const { slug } = useParams();
    const solution = getSolarSolutionBySlug(slug);
    const category = getCategoryBySlug('solar');

    if (!solution) return <Navigate to="/power-systems/solar" replace />;

    return (
        <SolutionDetail
            solution={solution}
            solutions={SOLAR_SOLUTIONS}
            basePath="/power-systems/solar"
            backLabel="Solar Solutions"
            otherTitle="Explore Other Solar Solutions"
            serviceOptions={category.subcategories.map((s) => s.title)}
            defaultService={solution.title}
            galleryCategory="solar"
        />
    );
}