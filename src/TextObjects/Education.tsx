
const education = {
    english: {
      title: "EDUCATION",
      programming: {
        title: "PROGRAMMING",
        fullstack: {
          title: "FULLSTACK WEB DEVELOPMENT",
          text: (
            <>
              First of all I am a self taught programmer, so I have no formal
              education in this area.
              <br />
              For fullstack web development I completed{" "}
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript?"
                className=" link" target="_blank"
              >
                The Odin Project
              </a>
              .
              <br />
              <br />
              This didn't teach many essential skills; so I took it upon myself
              to learn: <br /> TypeScript, Tailwind (also Bootstrap but prefer
              Tailwind), graphQL and more complex backend technologies.
              <br />
              <br />
              This got my extreamly interested in web development so I have
              continued to build full stack projects for anything that I may
              find fun.
              <br />
              <br />
              Please check out my projects above for what I have been building.
            </>
          ),
        },

        other: {
          title: "OTHER",
          text: (
            <>
              Here is a list of things I have learnt along my programming
              journey.
              <br />
              <br />
              <ul>
                Rust (the language interested me bacuase of how it works).{" "}
              </ul>
              <ul>Data Science/Automation using Python.</ul>
              <ul>Game Development using Unity (C#). </ul>
              <ul>Arduino (C++). </ul>
              <br />
              I can leverage any of these skills when needed. Data Science
              and Automation have proven to be extreamly useful in my science
              jobs.
            </>
          ),
        },
      },

      university: {
        title: "UNIVERSITY",
        bachelor: {
          title: "Bachelor of Biotechnology and Chemistry",
          text: (
            <>
              Swinburne University of Technology
              <br />
              2012-2015
              <br />
              <br />
              Final year of university I took an interest in computer chemistry.
              This class taught me how to use Gaussian for chemical similations.
            </>
          ),
        },

        honours: {
          title: "Bachelor of Science (Chemistry) (Honours)",
          text: (
            <>
              La Trobe University
              <br />
              2016-2016
              <br />
              <br />
              Achieved 1st class honours. Thesis: Simulated and Measured Lattice
              Vibrations for Nitrile Ices Present on Titan
              <br />
              This thesis required the use of supercomputers and programming in
              the Gaussian language for chemical simulations.
            </>
          ),
        },
      },
    },
    japanese: {
      title: "教育履歴",
      programming: {
        title: "プログラミング",
        fullstack: {
          title: "フルスタックエンジニア",
          text: (
            <>
              まずは、プログラミングのスキルが全部一人でまなびました。
              <br />
              フルスタックエンジニアの最初のコースは
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript?"
                className=" link" target="_blank"
              >
                The Odin Project
              </a>
              です。
              <br />
              <br />
              このコースではJavascript、HTML、CSS、React、NodeJS、MongoDB、REST
              APIの初心者のスキルを勉強しましたが
              <br />
              Typescript,　GraphQL、Tailwind、Bootstrap等の内容が全くなく、一人で学びました。
              <br />
              <br />
              このコースのおかげで、興味があるプロジェクトを作成、スキルアップしています。
              <br />
              <br />
              このウェッブサイトに乗ってあるプロジェクトをご覧ください。
            </>
          ),
        },

        other: {
          title: "他は",
          text: (
            <>
              今までのプログラミング言語を勉強したこと
              <br />
              <br />
              <ul>Rust:（言語の仕組みが面白く、安全）</ul>
              <ul>Python: データサイエンス・AI・自動的なこと</ul>
              <ul>C#: ゲーム用(Unity)</ul>
              <ul>C++: Arduino</ul>
              <br />
              色んな言語の知識があり、必要なら仕事等には使えます。
            </>
          ),
        },
      },

      university: {
        title: "大学",
        bachelor: {
          title: "Bachelor of Biotechnology and Chemistry",
          text: (
            <>
              Swinburne University of Technology
              <br />
              2012-2015
              <br />
              <br />
              ３年生としてはコンピュータ化学を興味があり、Gaussianを勉強しました。
            </>
          ),
        },

        honours: {
          title: "Bachelor of Science (Chemistry) (Honours)",
          text: (
            <>
              La Trobe University
              <br />
              2016-2016
              <br />
              <br />
              最高の点数を遂げました。 (1st class honours)
            </>
          ),
        },
      },
    },
  };

  export default education;
