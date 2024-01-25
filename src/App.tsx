
import { CardDefault } from "./Card";
import { NavbarWithSearch } from "./Navbar";
import {
  Typography,
} from "@material-tailwind/react";

function App() {
  const cards = [
    { title: 'ELAD', link: 'https://elad-mun-website.vercel.app/', logo: 'elad.png',
      description: 'The English Literary and Debating Society is a haven for students who are enthralled by the language and work to develop their skills and entire persona.' },
    { title: 'HLAD', link: 'https://hlad.netlify.app/' , logo: 'hlad.png', 
      description: 'हिन्दी साहित्यिक एवं वाद-विवाद समिति ,छात्रों के अभिव्यक्ति कौशल और संपूर्ण व्यक्तित्व को विकसित करने के लिए जानी जाती है।'},
    { title: 'OLAD', link: 'https://hlad.netlify.app/olad' , logo: 'hlad.png', 
    description: 'अन्य भाषा  साक्षरता एवं वाद-विवाद समिति की स्थापना भारत के विभिन्न क्षेत्रों की समृद्ध सांस्कृतिक विरासत और विविध पहचान को संरक्षित करने  के लिए की गई है।'},
    
    // Add more cards here
  ];

  return (
    <>
    <div className="relative">

    <NavbarWithSearch/>
    </div>
    <div className="bg-primary h-screen flex flex-col items-center justify-center">
    <Typography  className="mb-24 text-5xl">
                    Literary and Debating Club
                </Typography>
      <div className="flex flex-row space-x-10 mb-40">
        {cards.map((card, index  ) => (
          <CardDefault key={index} title={card.title} link={card.link} logo={card.logo} description = {card.description}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
