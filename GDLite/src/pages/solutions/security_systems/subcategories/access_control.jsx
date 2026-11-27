import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import {
    ACCESS_CONTROL_SOLUTIONS,
    getAccessControlSolutionBySlug,
} from '../../../../data/access_control_solutions';

export default function AccessControlSolution() {
    const { slug } = useParams();
    const solution = getAccessControlSolutionBySlug(slug);
    if (!solution) return <Navigate to="/security-systems/access-control" replace />;

    return (
        <SolutionDetail
            theme="accent"
            solution={solution}
            solutions={ACCESS_CONTROL_SOLUTIONS}
            basePath="/security-systems/access-control"
            backLabel="Access Control"
            otherTitle="Explore Other Access Control Solutions"
            serviceOptions={ACCESS_CONTROL_SOLUTIONS.map((s) => s.title)}
            defaultService={solution.title}
            galleryCategory="access-control"
        />
    );
}