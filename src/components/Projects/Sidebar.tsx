// import { useState } from "react";

interface sidebarInterface{
    languages: string[],
    addLanguage(newLang: string): void,
    deleteLanguage(oldLang: string): void
}
const Sidebar: React.FC<sidebarInterface> = ( {languages, addLanguage, deleteLanguage}) => {
    // const [checkedLanguages, setCheckedLanguages] = useState<string[]>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>):void {
        const {name, checked } = event?.target;

        if (checked){
            addLanguage(name);
            // setCheckedLanguages((prev) => [...prev, name]);
        }
        else{
            deleteLanguage(name);
            // setCheckedLanguages((prev) => prev.filter((lang) => lang !== name));
        }
    }

    return (
        <aside className='page-layout'>
            <h3>Filter Projects</h3>
            {/* <div className='non-shown-langs'> */}
            <form name="choose-languages">
                {languages.map((lang: string, index: number) => {
                    return <>
                        <label htmlFor={lang}>{lang}
                            <input 
                                key={index}
                                type="checkbox"
                                name={lang}
                                onChange={handleChange}
                            />
                            </label>
                            <br />
                        </>
                })}
            </form>
            {/* </div>
            <div className="show-langs">
                {showLanguages.map((lang: string, index: number) => {
                    return <p key={index}>{lang}</p>
                })}
            </div> */}
        </aside>
    )
}

export default Sidebar;