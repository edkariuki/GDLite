import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { getCategoryBySlug } from '../../../../data/data';
import { ELECTRICAL_SOLUTIONS, getElectricalSolutionBySlug } from '../../../../data/electrical_solutions';

export default function ElectricalSolution() {
    const { slug } = useParams();
    const solution = getElectricalSolutionBySlug(slug);
    const category = getCategoryBySlug('electrical');
    if (!solution) return <Navigate to="/power-systems/electrical" replace />;

    return (
        <SolutionDetail
            solution={solution}
            solutions={ELECTRICAL_SOLUTIONS}
            basePath="/power-systems/electrical"
            backLabel="Electrical Solutions"
            otherTitle="Explore Other Electrical Solutions"
            serviceOptions={(category?.subcategories ?? []).map((s) => s.title)}
            defaultService={solution.title}
            galleryCategory="electrical"
        />
    );
}