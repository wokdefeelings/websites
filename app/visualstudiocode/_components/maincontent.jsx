import Image from "next/image";
import Link from "next/link";
import {
  main__code,
  main__codeSeparator,
  main__image,
  main__section,
  main__video,
} from "../_modules/maincontent.module.css";

import modelPicker from "@/public/model-picker.png";
import vscodeSpeech from "@/public/vscode-speech.png";
import terminalInlineChat from "@/public/terminal-inline-chat.png";

export default function Maincontent() {
  return (
    <>
      <section className={main__section}>
        <h1>Announcing a free GitHub Copilot for VS Code</h1>
        <p>December 18, 2024 by Burke Holland, @burkeholland</p>
        <p>
          We're excited to announce an all new free plan for GitHub Copilot,
          available for everyone today in VS Code. All you need is a GitHub
          account. No trial. No subscription. No credit card required.
        </p>
        <p>
          <Link href="#">Enable GitHub Copilot Free</Link>
        </p>
        <p>
          You can click on the link above or just enable GitHub Copilot right
          from within VS Code like so...
        </p>
        <video
          className={main__video}
          controls
          poster="https://code.visualstudio.com/assets/blogs/2024/12/18/copilot-free.jpg"
          src="https://code.visualstudio.com/assets/blogs/2024/12/18/blog-video-v2.mp4"
          title="Copilot Edits Video"
        />
        <p>
          With GitHub Copilot Free you get 2000 code completions/month. That's
          about 80 per working day - which is a lot. You also get 50 chat
          requests/month, as well as access to both GPT-4o and Claude 3.5 Sonnet
          models.
        </p>
        <p>
          If you hit these limits, ideally it's because Copilot is doing its job
          well, which is to help you do yours! If you find you need more
          Copilot, the <Link href="#">paid Pro plan</Link> is unlimited and
          provides access to additional models like o1 and Gemini (coming in the
          new year).
        </p>
        <p>
          With this announcement, GitHub Copilot becomes a core part of the VS
          Code experience. The team has been hard at work, as always, improving
          that experience with brand new AI features and capabilities. Let’s
          take a look at some of the newer additions to GitHub Copilot that
          dropped in just the past few months. This is your editor, redefined
          with AI.
        </p>
      </section>

      <section
        className={main__section}
        id="work-with-multiple-files-using-copilot-edits"
      >
        <h2>
          <Link href="#work-with-multiple-files-using-copilot-edits">
            Work with multiple files using Copilot Edits
          </Link>
        </h2>
        <p>
          <Link href="#">Copilot Edits</Link> is a multi-file editing experience
          that you can open from the top of the chat side bar. Given a prompt,
          Edits will propose changes across files including creating new files
          when needed. This gives you the conversational flow of chat combined
          with the power of Copilot's code generation capabilities. The result
          is something you have to try to believe.
        </p>
        <video
          className={main__video}
          controls
          src="https://code.visualstudio.com/assets/blogs/2024/11/12/blog-video-demo.mp4"
          title="Copilot Edits Video"
        />
        <p>
          Try this: Build a native mobile app using Flutter. I{" "}
          <Link href="#">built a game last weekend</Link> and I've never used
          Flutter in my life.
        </p>
      </section>

      <section className={main__section} id="multiple-models-your-choice">
        <h2>
          <Link href="#multiple-models-your-choice">
            Multiple models, your choice
          </Link>
        </h2>
        <p>
          Whether you're using <Link href="#">Chat</Link>,{" "}
          <Link href="#">Inline Chat</Link>, or{" "}
          <Link href="#">Copilot Edits</Link>, you get to decide who your pair
          programmer is.
        </p>
        <div className={main__image}>
          <Image
            alt="AI model selection menu in VS Code."
            fill
            src={modelPicker}
          />
        </div>
        <p>
          Try this: Use 4o to generate an implementation plan for a new feature
          and then feed that prompt to Claude in{" "}
          <Link href="#">GitHub Copilot Edits</Link> to build it.
        </p>
      </section>

      <section className={main__section} id="custom-instructions">
        <h2>
          <Link href="#custom-instructions">Custom instructions</Link>
        </h2>
        <p>
          Tell GitHub Copilot exactly how you want things done with{" "}
          <Link href="#">custom instructions</Link>. These instructions are
          passed to the model with every request, allowing you to specify your
          preferences and the details that the model needs to know to write code
          the way you want it.
        </p>
        <p>
          You can specify these at the editor or project level. We'll even pick
          them up automatically if you include a{" "}
          <code>.github/copilot-instructions.md</code> file in your project.
          These instructions can easily be shared with your team, so everyone
          can be on the same page - including GitHub Copilot.
        </p>
        <p>For example...</p>
        <div className={main__code}>
          <p>## React 18</p>
          <p>* Use functional components</p>
          <p>* Use hooks for state management</p>
          <p>* Use TypeScript for type safety</p>
          <div className={main__codeSeparator} />
          <p>## SvelteKit 4</p>
          <p>* Use SSR for dynamic content rendering</p>
          <p>
            * Use static site generation (SSG) for pre-rendered static pages.
          </p>
          <div className={main__codeSeparator} />
          <p>## TypeScript</p>
          <p>
            * Use consistent object property shorthand: const obj = &#123;(name,
            age)&#125;
          </p>
          <p>* Avoid implicit any</p>
        </div>
        <p>
          Try this: Ask Copilot to generate the command to dump your database
          schema to a file and then set that file as one of your custom
          instructions.
        </p>
      </section>

      <section className={main__section} id="full-project-awareness">
        <h2>
          <Link href="#full-project-awareness">Full project awareness</Link>
        </h2>
        <p>
          GitHub Copilot has AI powered domain experts that you can mention with
          the <code>@</code> syntax. We call these, "participants". The{" "}
          <code>@workspace</code> <Link href="#">participant</Link> is a domain
          expert in the area of your entire codebase.
        </p>
        <video
          className={main__video}
          controls
          src="https://code.visualstudio.com/assets/blogs/2024/12/18/workspace-v2.mp4"
          title="VS Code's source control view showing a staged file. A commit message gets auto-generated by clicking a sparkle icon based on the staged changes"
        />
        <p>
          GitHub Copilot will also do intent detection (as seen in the video)
          and include the <code>@workspace</code> automatically if it sees you
          are asking a question that requires full project context.
        </p>
        <p>
          Try this: Type <code>/help</code> into the chat prompt to see a list
          of all the particpants in GitHub Copilot and their various areas of
          expertise, as well as slash commands that can greatly reduce
          prompting.
        </p>
      </section>

      <section
        className={main__section}
        id="naming-things-and-other-hard-problems"
      >
        <h2>
          <Link href="#naming-things-and-other-hard-problems">
            Naming things and other hard problems
          </Link>
        </h2>
        <p>
          They say naming things is one of the hardest problems in computer
          science. Press F2 to rename something, and GitHub Copilot will give
          you some suggestions based on how that symbol is implemented and used
          in your code.
        </p>
        <video
          className={main__video}
          controls
          src="https://code.visualstudio.com/assets/blogs/2024/12/18/copilot-rename-v2.mp4"
          title="Copilot Edits video"
        />
        <p>
          Try this: If you don't know what to call something, don't overthink
          it. Just call it <code>foo</code> and implement it. Then hit{" "}
          <kbd>F2</kbd> and let GitHub Copilot suggest a name for you.
        </p>
      </section>

      <section className={main__section} id="speak-your-mind">
        <h2>
          <Link href="#speak-your-mind">Speak your mind</Link>
        </h2>
        <p>
          Select the microphone icon to start a voice chat. This is powered by
          the free, cross-platform{" "}
          <Link href="#">VS Code Speech extension</Link> that runs on local
          models. No 3rd party app required.
        </p>
        <div className={main__image}>
          <Image
            alt="VS Code with file list and voice input active."
            fill
            src={vscodeSpeech}
          />
        </div>
        <p>
          Try this: Use Speech with GitHub Copilot Edits to prototype your next
          app. You can literally talk your way to a working demo.
        </p>
      </section>

      <section className={main__section} id="be-a-terminal-expert">
        <h2>
          <Link href="#be-a-terminal-expert">Be a terminal expert</Link>
        </h2>
        <p>
          With terminal chat, you can do just about anything in your terminal.
          Press <kbd>Cmd/Ctrl</kbd> + <kbd>i</kbd> while in the VS Code terminal
          and tell GitHub Copilot what you want to do. Copilot can also explain
          how to fix failed shell commands by analyzing the error output.
        </p>
        <p>
          For instance, I know that I can use the{" "}
          <Link href="#">ffmpeg library</Link> to extract frames from videos,
          but I don't know the syntax and flags. No problem!
        </p>
        <div className={main__image}>
          <Image
            alt="Terminal displaying a script to extract video frames."
            fill
            src={terminalInlineChat}
          />
        </div>
        <p>
          Try this: The next time you get an error in your terminal, look for
          the sparkle icon next to your prompt. Select it to have GitHub Copilot
          fix, explain, or even auto-correct the shell command for you.
        </p>
      </section>

      <section className={main__section} id="no-fear-of-commitment">
        <h2>
          <Link href="#no-fear-of-commitment">No fear of commitment</Link>
        </h2>
        <p>
          No more commits that say "changes". GitHub Copilot will suggest a
          commit message for you based on the changes you've made and your last
          several commit messages. You can{" "}
          <Link href="#">use custom instructions for commit generation</Link> to
          format the messages exactly the way you want.
        </p>
        <video
          className={main__video}
          controls
          src="https://code.visualstudio.com/assets/blogs/2024/12/18/ccdt-commit-msgs.mp4"
          title="Copilot Edits video"
        />
        <p>
          Try this: Go beyond commits. Install the{" "}
          <Link href="#">GitHub Pull Requests and Issues extension</Link> and
          you can generate pull request descriptions, get summaries of pull
          requests and even get suggested fixes for issues. All without leaving
          VS Code.
        </p>
      </section>

      <section className={main__section} id="extensions-are-all-you-need">
        <h2>
          <Link href="#extensions-are-all-you-need">
            Extensions are all you need
          </Link>
        </h2>
        <p>
          Every VS Code extension can tie directly into the GitHub Copilot APIs
          and offer a customized AI experience. Check out MongoDB with{" "}
          <Link href="#">their extension</Link> that can write impressively
          complex queries, use fuzzy search and a lot more...
        </p>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={main__video}
          frameBorder="0"
          height="459"
          referrerPolicy="strict-origin-when-cross-origin"
          src="https://www.youtube.com/embed/MLWlWrRAb4w?si=M_Hb4pM1mKc0vQoq"
          title="YouTube video player"
          width="100%"
        />
        <p>
          Try this: Build your own extension for GitHub Copilot using GitHub
          Copilot! We've created some new tutorials that show you how to{" "}
          <Link href="#">build a code tutor chat paricipant</Link> or{" "}
          <Link href="#">generate AI-powered code annotations</Link>.
        </p>
      </section>

      <section className={main__section} id="a-vision-for-the-future">
        <h2>
          <Link href="#a-vision-for-the-future">A vision for the future</Link>
        </h2>
        <p>
          This last one is a preview of something we're adding to GitHub Copilot
          soon, but it's way too cool not to show you right now.
        </p>
        <p>
          Install the <Link href="#">Vision Copilot Preview extension</Link> and
          ask GitHub Copilot to generate an interface based on a screenshot or
          markup.
        </p>
        <video
          className={main__video}
          controls
          src="https://code.visualstudio.com/assets/blogs/2024/12/18/copilot-vision-generate-ui.mp4"
          title="Copilot Edits video"
        />
        <p>Or use it to generate alt text for an image.</p>
        <video
          className={main__video}
          controls
          src="https://code.visualstudio.com/assets/blogs/2024/12/18/copilot-vision-markdown.mp4"
          title="Copilot Edits video"
        />
        <p>
          Try this: Mock up a UI using Figma or Sketch (or PowerPoint - it's ok
          if you do that. I do it too). Then use <code>@vision</code> to
          generate the UI. You can even tell it which CSS framework to use.
        </p>
        <p>
          Note: Vision is in preview today and requires you to have your own
          OpenAI, Anthropic, or Gemini API key. The key will not be required
          when we release it as part of GitHub Copilot. Coming Soon!
        </p>
      </section>

      <section className={main__section} id="keeping-up-with-github-copilot">
        <h2>
          <Link href="#keeping-up-with-github-copilot">
            Keeping up with GitHub Copilot
          </Link>
        </h2>
        <p>
          There's so much more GitHub Copilot we want to show you, but nothing
          can replace the experience of trying it for yourself. If you're just
          getting started, we recommend you check out{" "}
          <Link href="#">these 3 short videos</Link> to bring you up to speed
          quickly on the Copilot UI, as well as learning some prompt engineering
          best practices.
        </p>
        <p>
          We ship updates and new features for GitHub Copilot every month. The
          best way to keep up with the latest and greatest in AI coding is to
          follow us on <Link href="#">X</Link>, <Link href="#">Bluesky</Link>,{" "}
          <Link href="#">LinkedIn</Link>, and even <Link href="#">TikTok</Link>.
          We'll give you the updates as they drop - short and sweet - right in
          your feed.
        </p>
        <p>
          And if you've got feedback, we'd love to hear it. Feel free to @ us on
          social or drop an issue or feature request on the{" "}
          <Link href="#">GitHub Copilot extension issues repo</Link>.
        </p>
      </section>

      <section className={main__section} id="github-copilot-in-other-places">
        <h2>
          <Link href="#github-copilot-in-other-places">
            GitHub Copilot in other places
          </Link>
        </h2>
        <p>
          As part of the free tier, you will also be able to use GitHub Copilot
          on GitHub.com.
        </p>
        <p>
          While we work with GitHub to build the Visual Studio Code experience,
          Copilot itself is not exclusive to VS Code. You may be wondering about
          editors like Visual Studio. Will those users get a free Copilot
          offering as well?
        </p>
        <p>
          Yes. Absolutely. Check out <Link href="#">this blog post</Link> from
          the VS team on what works today and what&#39;s coming shortly
        </p>
      </section>

      <section className={main__section} id="the-ai-code-editor-for-everyone">
        <h2>
          <Link href="#the-ai-code-editor-for-everyone">
            The AI code editor for everyone
          </Link>
        </h2>
        <p>
          2025 is going to be a huge year for GitHub Copilot, now a core part of
          the overall VS Code experience. We hope that you&#39;ll join us on the
          journey to redefine the code editor. Again.
        </p>
        <p>
          <Link href="#">Enable GitHub Copilot Free</Link>
        </p>
        <p>Happy Coding!</p>
        <p>Burke Holland @burkeholland</p>
      </section>
    </>
  );
}
