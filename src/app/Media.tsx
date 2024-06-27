import Article from "@/components/Article";

function Media() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">Media</h2>
      <div className="flex flex-wrap gap-4">
        <Article
          link="/statements/david-howes"
          title="David Howes on JMSS's SIMC win"
          note="David Howes - Victorian Department of Education and Training"
        />
        <Article
          link="https://www.asi.edu.au/australian-team-2024-international-earth-science-olympiad/"
          title="Introducing the team representing Australia at the 2024 International Earth Science Olympiad!"
          note="Australian Science Innovations"
          image="https://www.asi.edu.au/wp-content/uploads/2024/06/AOTA-2024-Group-Sm-1200x800.jpg"
        />
        <Article
          link="https://jmss.vic.edu.au/news/in-the-media/jmss-are-the-champions-at-simc-2024/"
          title="JMSS are the champions at SIMC 2024"
          note="John Monash Science School"
          image="https://jmss.vic.edu.au/wp-content/uploads/2024/05/SIMC1.png"
        />
        <Article
          link="https://simc2024.net/2024/04/05/day-2/#1-faces-of-simc-john-monash-science-school"
          title="Faces of SIMC - John Monash Science School"
          note="Singapore International Mathematical & Computational Challenge 2024"
          image="https://i0.wp.com/simc2024.net/wp-content/uploads/2024/05/Photo-1.jpeg?resize=2048%2C1536&ssl=1"
        />
      </div>
    </>
  );
}

export default Media;
