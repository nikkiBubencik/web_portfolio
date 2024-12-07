import './PhotoGallery.css';

function PhotoGallery(){
    const images=[
        {path: "IMG_5264.JPG", alt: "Family photo at Zion Nation Park"},
        {path: "IMG_9682.jpeg", alt:"Scenic view at Zion National Park"},
        {path: "IMG_6966.JPG", alt: "Tha narrows Trail with over waist deep water"},
        {path: "IMG_5426.JPG", alt:"Scenic view at Zion National Park"},
        {path: "DSCF9883.JPG", alt: "Graduation photo"},
        {path: "DSCF0161.JPG", alt:"Group graduation photo"},
        {path: "DSCF0056.JPG", alt: "Graduation photo"},
        {path: "DSCF0021.JPG", alt:"Group graduation photo"},
        {path: "IMG_9554.JPEG", alt: "Spain and Portugal vacation group photo"},
        {path: "IMG_9383.JPEG", alt: "Spain and Portugal vacation group photo"},
        {path: "IMG_6370.JPEG", alt: "Spain and Portugal vacation photo"},
        {path: "b13a6ada-c124-486f-ab25-c57a4f62418c.JPG", alt: "Service trip to Costa Rica"},
        {path: "IMG_7905.JPG", alt: "At a estraunt in Paris"},
        {path: "IMG_7465.JPEG", alt: "Out of the palace in London"},
        {path: "IMG_7487.JPEG", alt: "Grou photo with the London Bridge"},
        {path: "IMG_7981.JPEG", alt: "Cliffs of Moher"},
        {path: "9C509EC0-6868-44DD-8E82-CA9B3ACE9E9F.jpg", alt: "Selfie in Ireland"}
    ];
    return(
        <div className="photo-gallery">
            <h2>Photo Gallery</h2>
            <div className="gallery-container">
                {images.map(image => {
                    return (<div className="gallery-item" key={image.path}>
                        <img src={`images/${image.path}`} alt={image.alt} />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default PhotoGallery;