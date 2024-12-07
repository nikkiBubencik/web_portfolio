import TopicCard from "./TopicCard";

function DomManipulation( ){
    const name = "Dom Manipulatoin";
    const description = ["Real Dom as VirtualDom", "event listners"];
    return(
        <div>
            <TopicCard name={name} description={description} />
        </div>
    )
}

export default DomManipulation;