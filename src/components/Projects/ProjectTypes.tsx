export interface ProjectInterface{
    name: string,
    description: string,
    languages: string[], 
    codeLink: string,
    link: string,
    image: string
}

export interface ProjectProps{
    project: ProjectInterface,
    handleOpen? : any,
    handleClose? : any
}