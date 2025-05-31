import './Courses.css';
import { courseInterface } from './CourseTypes';

interface CourseProps{
    course: courseInterface
}

const CourseCard: React.FC<CourseProps> = ( {course} ) => {
    const { code, title, school, description, github } = course;
    return (
        <div className="course-item">
            <h3>{title}</h3>
            <h4>{school}</h4>
            <h4>{code}</h4>
            <p>{description}</p>
            { github && 
                <a href={github} target="_blank" rel="noopener noreferrer">Course Assignments</a>
            }
        </div>
    );
}

export default CourseCard;
