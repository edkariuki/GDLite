import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import {
    GATE_AUTOMATION_SOLUTIONS,
    getGateAutomationSolutionBySlug,
} from '../../../../data/gate_automation_solutions';

export default function GateAutomationSolution() {
    const { slug } = useParams();
    const solution = getGateAutomationSolutionBySlug(slug);
    const category = getSecurityCategoryBySlug('gate-automation');
    if (!solution) return <Navigate to="/security-systems/gate-automation" replace />;

    const subs = category?.subcategories ?? [];

    return (
        <SolutionDetail
            theme="accent"
            solution={solution}
            solutions={GATE_AUTOMATION_SOLUTIONS}
            basePath="/security-systems/gate-automation"
            backLabel="Gate Automation Solutions"
            otherTitle="Explore Other Gate Automation Solutions"
            serviceOptions={subs.map((s) => s.title)}
            defaultService={
                subs.find((s) => s.title.toLowerCase() === solution.title.toLowerCase())?.title ?? solution.title
            }
            galleryCategory="gate-automation"
        />
    );
}