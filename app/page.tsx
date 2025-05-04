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
          Hi, I'm Brandon Echols and this is <i>Notes from the Wild Mind</i>. That is, you'll find a bunch of notes from <b>my</b> wild mind here.
        </p>
        <p>
          At the top of the page, you'll see three tabs. The <b>Blog</b> tab is where you'll find all of my random thoughts and musings.
        </p>
        <p>
          In <b>Projects</b>, you'll find links to projects that I'm either working on or have already completed (ha! like I'll ever <i>finish</i> anything).
        </p>
        <p>
          Under the <b>Photos</b> tab, you can peruse a gallery of photographs that I have captured. The newest images will appear near the top.
        </p>
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/brandonechols"
          method="post"
          target="popupwindow"
          onSubmit={() => {
            window.open('https://buttondown.com/brandonechols', 'popupwindow');
          }}
          className="embeddable-buttondown-form"
        >
          <label htmlFor="bd-email">Enter your email</label>
          <input type="email" name="email" id="bd-email" required />

          <input type="submit" value="Subscribe" />

          <p>
            <a
              href="https://buttondown.com/refer/brandonechols"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Buttondown.
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}