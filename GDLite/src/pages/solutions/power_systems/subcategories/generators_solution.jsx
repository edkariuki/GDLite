import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import {
    GENERATOR_SOLUTIONS,
    GENERATOR_SERVICES,
    getGeneratorSolutionBySlug,
} from '../../../../data/generators_solutions';

export default function GeneratorsSolution() {
    const { slug } = useParams();
    const solution = getGeneratorSolutionBySlug(slug);
    if (!solution) return <Navigate to="/power-systems/generators" replace />;

    return (
        <SolutionDetail
            solution={solution}
            solutions={GENERATOR_SOLUTIONS}
            basePath="/power-systems/generators"
            backLabel="Generator Solutions"
            otherTitle="Explore Other Generator Solutions"
            serviceOptions={GENERATOR_SERVICES}
            defaultService={GENERATOR_SERVICES[0]}
            galleryCategory="generators"
        />
    );
}