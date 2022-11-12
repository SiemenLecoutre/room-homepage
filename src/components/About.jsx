import image1 from '../images/image-about-dark.jpg'
import image2 from '../images/image-about-light.jpg'
import '../style/About.css'

function About() {
    return <div className='about'>
        <img src={image1} alt="Two chairs and a table" />
        <div className='container'>
            <h3>About our furniture</h3>
            <p>  Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>


        <img src={image2} alt="A chair" />
    </div>
}

export default About