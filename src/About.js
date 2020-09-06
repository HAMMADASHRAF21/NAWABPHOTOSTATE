import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import './About.css';
function About() {
    return (
        <div style={{backgroundColor:'#F6F6F6'}}>
            <Container>
<Row>
    <Col lg={2}></Col>
    <Col style={{padding:'20px'}} lg={8}>
<h1 style={{fontWeight:'bolder',fontFamily:'helvetica',color:'#799825',fontSize:'60px'}} > The Depilex Story </h1>

    </Col>
    <Col lg={2}></Col>
</Row>
<Row>

<Col lg={12}>   <p> Founded in 1980 by the visionary Masarrat Misbah, Depilex has grown from a single premise providing professional beauty relaxation and training services, to 70 locations nationwide. Over the years, Depilex has gained greater expertise and wider exposure in each of its specialized service areas. Depilex is passionate and takes pride in providing its customers with the best in Customer Service, Professionalism and Expertise. Hence, it is always at the forefront of Hair, Beauty and Fashion trends in Pakistan. Hard work, consistency in high standards and the fact that Masarrat Misbah (CEO) is well versed and internationally qualified in this field are the main reasons for the success achieved by Depilex. </p>
<br/>
<p>The staff at Depilex is fully trained due to the fact that Masarrat feels that skin and hair are the two most important areas that need to be handled with care. That is why along with the Beauty Clinic and Institute has also been running simultaneously for the past 40 years and has helped instill the art of beauty therapy in aspiring beauticians. Now headed by Redah Misbah (Director), Depilex is the largest chain of salons in Pakistan. Plans are underway to open branches in the UK and US as well. Redah Misbah has a great vision and perspective for Depilex. Her international experience in the beauty industry is incorporated in all aspects of the business, her fresh, more modern views and visionary ideas has lead Depilex to a new era. Redah strives to take Depilex to new levels with innovative management and techniques to maintain its standing in Pakistan and increase its international presence.</p>

</Col>


</Row>

<Row style={{paddingTop:'50px'}}>

<Col lg={5} style={{position:'absulute'}}>
<img style={{colorAdjust:'#9D9D9D'}} src="https://depilexonline.com/wp-content/uploads/2018/05/MM-Corrected.jpg"/>
</Col>

<Col lg={7} >
<h2 style={{fontFamily:'helvetica',color:'#799825'}}> Masarrat Misbah</h2>
<p>Masarrat Misbah was born on the 25th of November 1959 in Karachi Pakistan where she spent her early years completing her education. If there is one salon in the country that has truly made it international, it is Depilex. Its name has become synonymous with health and beauty in Pakistan. Over the years, Masarrat has attained the status of an icon in this field and people have come to trust and revere her. To earn this prestigious reputation it has taken 40 years of sheer hard work, commitment, dedication and thorough skill.s</p>
<br/>
<p>Today Masarrat can reminisce over the eventful four decades spanning over her successful venture into the world of Depilex. Thanks to her trailblazing approach and brilliant concepts, the beauty business in Pakistan has flourished, paving the way for today’s highly successful world of Pakistani fashion and beauty. Creating an industry, Depilex took upon itself to revolutionize the entire business. Masarrat has obtained a thorough training in the field of beauty therapy and till now continues to gain education so that it may be imparted to her team and students. Creating a market for new products and then popularizing the product is no easy job, but Masarrat aptly and gracefully handled this formidable task.</p>
</Col>


</Row>



            </Container>
        </div>
    )
}

export default About
