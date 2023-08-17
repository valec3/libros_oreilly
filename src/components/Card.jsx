import iconBook from '../assets/book-icon.jpg';
const Card = () => {
    return (
        <article className="card" >
            <figure className="card-img">
                <img src="https://learning.oreilly.com/covers/9781803241432/600w/" alt="" />
            </figure>
            <div className="card-content">
                <div className="category">
                    <img  className="book-icon" src={iconBook} alt="" />
                    <p>BOOK</p>
                </div>
                <h3>Clean Code: A Handbook of Agile Software Craftsmanship</h3>
                <h4>By Robert C. Martin</h4>
                <p className="text-description">Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code.
                </p>
                <a className="icon-addlist" href="#">
                    <img src={iconBook} alt="" />
                </a>
            </div>
        </article>
    )
}

export default Card