export default function ImageSlider() {

    const instaPhoto = [
        {id: 1, url: '/insta/insta_1.jpeg'},
        {id: 2, url: '/insta/insta_2.jpeg'},
        {id: 3, url: '/insta/insta_3.jpeg'},
        {id: 4, url: '/insta/insta_4.jpeg'},
        {id: 5, url: '/insta/insta_5.jpeg'},
        {id: 6, url: '/insta/insta_6.jpeg'},

    ]
    
    return (
        <div className="relative max-w-screen-2xl mx-auto bg-white h-72 overflow-hidden">
            <div className="relative h-full active:animate-scroll flex">
                {instaPhoto.map((photo) => (
                    <img height="288" width="288" key={photo.id} src={photo.url} alt="Instagram" className="object-cover"></img>
                ))}
            </div>
         
        </div>
    ) 
}
