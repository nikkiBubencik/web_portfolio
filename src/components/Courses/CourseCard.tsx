import './Courses.css';
import { courseInterface } from './CourseTypes';

interface CourseProps{
    course: courseInterface
}

const CourseCard: React.FC<CourseProps> = ( {course} ) => {
    const { code, title, school, description } = course;
    return (
        <div className="project-item">
            <h3>{title}</h3>
            <h4>{school}</h4>
            <h4>{code}</h4>
            <p>{description}</p>
        </div>
    );
}

export default CourseCard;