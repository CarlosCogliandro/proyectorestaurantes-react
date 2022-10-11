import {Button, Card} from 'react-bootstrap';
import '../Card/card-style.css'



function Cards() {

  return (
    <div className='cards'>
      <Card className='card'>
        <Card.Img className='img-home' variant="top" src="https://th.bing.com/th/id/R.9720afd4adec8849e069300bb50663b5?rik=jSI1TJzlf8%2fexQ&riu=http%3a%2f%2fbuenosairesmarbella.com%2fwp-content%2fuploads%2f2017%2f03%2fBuenos-Aires-Photos.png&ehk=ij7eFbqt5Dcrwrp3447Kw3sqTt%2fx7olbb%2f8f76L6D%2b4%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          <a href="https://buenosairesmarbella.com/" target="_blank"><Button variant="primary">Ir a la pagina</Button></a>
        </Card.Body>
      </Card>

      <Card className='tarjeta'>
        <Card.Img className='img-home' variant="top" src="https://th.bing.com/th/id/R.f03d372dd8e4ade030b30bef1578878c?rik=q6wCA%2fA%2b5nQamg&riu=http%3a%2f%2fwww.temporarestaurant.com%2fwp-content%2fuploads%2f2017%2f03%2fTempora-Photo-Logo.png&ehk=ex4Z9xK9VeEiy36wrOuHrglstUwq3M%2bc5WkyylDeXbc%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          <a href="https://www.temporarestaurant.com/" target="_blank"><Button variant="primary">Ir a la pagina</Button></a>
        </Card.Body>
      </Card>

      <Card className='tarjeta'>
        <Card.Img className='img-home' variant="top" src="https://langolomarbella.com/wp-content/uploads/2022/04/logo-bl.png" />
        <Card.Body>
          <a href="https://langolomarbella.com/" target="_blank"><Button variant="primary">Ir a la pagina</Button></a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;