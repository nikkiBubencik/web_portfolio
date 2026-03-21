import './Courses.css';
import { courseInterface } from './CourseTypes';

interface CourseProps{
    course: courseInterface
}

const CourseCard: React.FC<CourseProps> = ( {course} ) => {
    const { code, title, school, description, github } = course;
    return (
        <div className="course-item">
            <h3 className="course-title">{title}</h3>
            <div className='course-data'>
                <h4 className='secondary-content'>{school}</h4>
                <h4 className='secondary-content'>{code}</h4>
            </div>
            <p className='course-desc'>{description}</p>
            { github && 
                <a href={github} target="_blank" rel="noopener noreferrer">Course Assignments</a>
            }
        </div>
    );
}

export default CourseCard;
