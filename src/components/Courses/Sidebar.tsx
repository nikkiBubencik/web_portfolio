interface sidebarInterface{
    schools: string[],
    addSchool(newSchool: string): void,
    deleteSchool(oldSchool: string): void
}
const Sidebar: React.FC<sidebarInterface> = ( {schools, addSchool, deleteSchool}) => {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>):void {
        const {name, checked } = event?.target;
        if (checked){
            addSchool(name);
        }
        else{
            deleteSchool(name);
        }
    }

    return (
        <aside className='page-layout project-sidebar'>
            <h3>Filter Courses</h3>
            <form name="choose-languages">
                {schools.map((school: string, index: number) => {
                    return < div key={index}>
                        <label htmlFor={school}>{school}
                            <input 
                                key={index}
                                type="checkbox"
                                name={school}
                                onChange={handleChange}
                            />
                            </label>
                            <br />
                        </ div>
                })}
            </form>

        </aside>
    )
}

export default Sidebar;
