import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">
        Welcome!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I'm Brandon Echols and this is <i>Notes from the Wild Mind</i>. That is, you'll find a bunch of sentiments from <i>my</i> <b>wild</b> mind here.
        </p>
        <p>
          At the top of the page, you'll see three tabs. The <b>Blog</b> tab is where you'll find all of my random thoughts and musings.
        </p>
        <p>
          In <b>Projects</b>, you might find a variety of links—projects I'm working on, projects I've finished (however seldom that occurs), and more.
        </p>
        <p>
          Under the <b>Photos</b> tab, you can peruse a gallery of photographs that I have captured. The newest images will appear near the top.
        </p>
        <h4 style={{ textAlign: 'center' }}>
          Subscribe to the newsletter, and get notified when new articles are posted:
        </h4>
        <iframe
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "50px",
            backgroundColor: "#363636",
          }}
          src="https://buttondown.com/brandonechols?as_embed=true"
        />
      </div>
    </section>
  );
}