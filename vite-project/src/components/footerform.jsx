import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import "bootstrap/dist/css/bootstrap.min.css";

function footerform() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        About US!
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
        <h1>About US!</h1>
        <p>Welcome to GuitarStore's Stairway to Heaven, where music comes to life through exceptional guitars! We specialize in offering a carefully curated selection <br />
of acoustic, electric, and classical guitars, along with premium accessories and equipment. Our team of musicians and experts is here <br />
to guide and inspire every customer, from beginners to professionals.</p>

Mission: <br />

To provide our customers with the highest quality guitars and music equipment, creating a welcoming and educational environment that fosters musical passion and creativity.

<br />

Vision: <br />

To be recognized as the preferred destination for musicians seeking excellence in instruments and customer service, setting a standard of quality and dedication in the music industry.

Contact Us <br />
We are located in Mall San FranderYMarilyn. You can visit us Monday through Saturday from 9am to 5pm, or contact us by phone at 55555555 or by email at jose@guitarstore.com <br />
We look forward to seeing you here where we have the perfect guitar for you!



        </div>
      </Fade>
    </>
  );
}

export default footerform