import { Navigate, useParams } from 'react-router-dom';
import SolutionDetail from '../../../../components/solution_detail';
import { getSecurityCategoryBySlug } from '../../../../data/security_data';
import { ALARMS_SOLUTIONS, getAlarmsSolutionBySlug } from '../../../../data/alarms_solutions';

export default function AlarmsSolution() {
    const { slug } = useParams();
    const solution = getAlarmsSolutionBySlug(slug);
    const category = getSecurityCategoryBySlug('alarms');
    if (!solution) return <Navigate to="/security-systems/alarms" replace />;

    return (
        <SolutionDetail
            theme="accent"
            solution={solution}
            solutions={ALARMS_SOLUTIONS}
            basePath="/security-systems/alarms"
            backLabel="Alarm Solutions"
            otherTitle="Explore Other Alarm Solutions"
            serviceOptions={(category?.subcategories ?? []).map((s) => s.title)}
            defaultService={solution.title}
            galleryCategory="alarms"
        />
    );
}