interface HeadingProps{
    title:string,
    center?:boolean
}

const Heading:React.FC<HeadingProps> = ({title,center}) => {
    return ( 
    <div className={center ? "text-center" : "text-2xl"}>
        <h1 className="font-bold text-2xl">{title}</h1>
    </div> );
}
 
export default Heading;