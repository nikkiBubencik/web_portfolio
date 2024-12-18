export interface JobInterface{
    title: string,
    company: string,
    location: string,
    when: string,
    description: string[]
}

interface MajorsInterface{
    name: string,
    type: string
}

export interface SchoolInterface{
    school: string,
    majors: MajorsInterface[],
    minor: string,
    concentration: string,
    other: string[]
}