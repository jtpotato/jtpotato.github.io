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
          image="https://content.vic.gov.au/sites/default/files/2022-09/Vic_Gov_Default_Display_Image_Proper_Spacing.png"
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
        <Article
          link="https://www.immchallenge.org.au/results"
          title="Results - IMMC 2024 National Finals"
          note="Australian Council for Educational Research"
          image="https://www.immchallenge.org.au/files/IM2C-Facebook-1200-x-628.jpg"
        />
        <Article
          link="https://rtlaustralia.com/2016/12/11/well-done-to-students-at-glendal-ps-a-new-rtl-partner-school-in-2017-on-winning-a-project-award-at-the-national-first-lego-league-held-in-the-sydney-over-the-weekend-they-have-been-invited-to-represen/"
          title="Well done to students at Glendal PS (a new RTL partner school in 2017) on winning The Innovation Award for their Guinea Pig project at the National First Lego League held in the Sydney over the weekend"
          note="Realtime Learning"
          image="https://rtlaustralia.com/wp-content/uploads/2019/11/2497d4_614689f1305b41c7b71bbe0a7049754e-mv2.jpg"
        />
      </div>
    </>
  );
}

export default Media;
