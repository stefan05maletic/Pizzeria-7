export default function Image({imgSrc, pt, wd, hg}){
    return(
        <div className="custom-image" style={{paddingTop: pt, width: wd, height: hg}}>
            <img src={imgSrc} alt=""/>
        </div>
    )
} 