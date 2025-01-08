import { useEffect, useState } from 'react';
import './Courses.css';
import CourseCard from './CourseCard';
import { courseInterface } from './CourseTypes';
import Sidebar from './Sidebar';

const ShowCourses: React.FC = () => {
    const [courseList, setCourseList] = useState<courseInterface[]>([]);
    const [showSchool, setShowSchool] = useState<string[]>([]);
    const [showCourse, setShowCourse] = useState<courseInterface[]>([]);
    const [allSchools, setAllSchools] = useState<string[]>([]);

    useEffect(() => {
        async function getCourses () {
        try {
            const response = await fetch('data/courses.json');
            const data = await response.json();
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            setCourseList(data);
            setShowCourse(data);
        } catch(error){
            console.log("error fetching data", error);
        }
        }

        getCourses();

    }, []);

    useEffect(() => {
        function getAllLanguages(): void{
            setAllSchools(
                [...new Set(courseList.flatMap(course => course.school))]

            );
        }
        getAllLanguages();
    }, [courseList])

    useEffect(() =>{
        if (showSchool.length === 0){
            setShowCourse(courseList);
        }
        else{
            setShowCourse(courseList.filter((course: courseInterface) => 
                showSchool.includes(course.school)
            )
            )
        }
    }, [showSchool, courseList])
    
    function addSchool(newSchool: string): void {
        setShowSchool(prevList => [...prevList, newSchool])
    }

    function deleteSchool(oldSchool: string): void {
        setShowSchool(
            showSchool.filter(school => school !== oldSchool)
        )
    }

    return (
        <div className="project-page">
            <h1 className="header-title page-layout"> Courses </h1> 
            <div id='main-project'>
                <aside id="sidebar">
                    <Sidebar schools={allSchools} addSchool={addSchool} deleteSchool={deleteSchool} />
                </aside>
                <div className="project-container page-layout">
                    {showCourse.map((course: courseInterface, index: number) => (
                        <CourseCard course={course} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowCourses;