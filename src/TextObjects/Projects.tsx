export const projects = {
    english: {
      title: "PROJECTS",
      roboRecipies: {
        title: "Robo Recipes",
        text: (
          <>
            {" "}
           A small website I created to use OpenAI's ChatGPT3 and DALL-E 2 to create recipes!
            <br />
            <br />
            This required heavy use of API calls and AWS S3 buckets.
          </>
        ),
        tags: ['AI', 'AWS', 'S3 Bucket', 'REST API', 'Svelte', 'Typescript', 'Sockets', 'MongoDB', 'Mongoose', 'Node.js', 'Heroku', 'Tailwind', 'CRUD' ],
        image: 'src/assets/RoboRecipe.png',
        website: 'https://tranquil-hamlet-26805.herokuapp.com/',
        github: 'https://github.com/Chappo050/RoboRecipes'
      },
      thesaurace: {
        title: "ThesauRACE",
        text: (
          <>
            {" "}
            ThesauRACE is a multiplayer synonym guessing game I created. The
            main goal of this project was to learn how to better use sockets.
            <br />
            <br />
            This project also helped me learn more about CORS and Helmet.
          </>
        ),
        tags: ['REST API', 'React', 'Typescript', 'Sockets', 'MongoDB', 'Mongoose', 'Node.js', 'Heroku', 'Tailwind', 'CRUD' ],
        image: 'src/assets/ThesauRace.png',
        website: 'https://thesaurace.herokuapp.com/',
        github: 'https://github.com/Chappo050/Thesarace'
      },
      blog: {
        title: "Blog",
        text: (
          <>
            Just a standard CRUD blog site. This uses passportJS user
            authentication for posting/editing.
            <br />
            <br />
            Building this project has made me adept at routing and using
            MongoDB.
          </>
        ),
        tags: ['REST API', 'React', 'Typescript', 'MongoDB', 'Mongoose', 'Node.js', 'Heroku', 'Tailwind', 'CRUD' ],
        image: 'src/assets/Blog.png',
        website: 'https://mern-blog-chappo050.herokuapp.com/',
        github: 'https://github.com/Chappo050/Blog-Heroku'
      },
      finder: {
        title: "Finder",
        text: (
          <>
            Finder is a Where's Wally type of game. I used the BaaS website
            Firebase to handle the backend.
            <br />
            <br />
            Although I prefer making fullstack websites it's a great skill to
            have incase I ever need it.
          </>
        ),
        tags: ['React', 'JavaScript', 'BaaS', 'FireBase', 'Tailwind', 'CRUD' ],
        image: 'src/assets/Finder.png',
        website: 'https://chappo050.github.io/Finder-firebase/',
        github: 'https://github.com/Chappo050/Finder-firebase'
        
      },
      profile: {
        title: "Profile Website (This)",
        text: (
          <>
            A place to display my projects and introduce myself.
            <br />
            <br />
            This website is also a good place to play around with Tailwind and
            front end design.
          </>
        ),
        tags: ['React', 'Typescript', 'Responsive Design', 'Tailwind' ],
        image: 'src/assets/Profile.png',
        website: 'https://mlchaplin.dev',
        github: 'https://github.com/Chappo050/ProfileV2'
      },
      world: {
        title: "World Data",
        text: (
          <>
            The goal of this project is to become adept at using Apollo GraphQL
            by creating a CRUD app with authentication.
            <br />
            <br />
            This project is a fullstack TypeScript MERN application deployed on Heroku.
          </>
        ),
        tags: ['GraphQL', 'Apollo GraphQL', 'React', 'Typescript', 'MongoDB', 'Mongoose', 'Node.js', 'Framer', 'Tailwind', 'Responsive Design', 'CRUD' ],
        image: 'src/assets/worldData.png',
        website: 'https://glacial-tor-64648.herokuapp.com/',
        github: 'https://github.com/Chappo050/World_Data'
      },
    },
    japanese: {
      title: "PROJECTS",
      roboRecipies: {
        title: "ローボードレシピー",
        text: (
          <>
            {" "}
            OpenAIを使用されているアプリです。
            <br />
            <br />
            AWSのS3バケットを使用して、データをアップできます。
          </>
        ),
        tags: ['AI', 'AWS', 'S3 Bucket', 'REST API', 'Svelte', 'Typescript', 'Sockets', 'MongoDB', 'Mongoose', 'Node.js', 'Heroku', 'Tailwind', 'CRUD' ],
        image: 'src/assets/RoboRecipe.png',
        website: 'https://tranquil-hamlet-26805.herokuapp.com/',
        github: 'https://github.com/Chappo050/RoboRecipes'
      },
      thesaurace: {
        title: "ThesauRACE",
        text: (
          <>
            {" "}
            ThesauRACEというプロジェクトはマルチプレイヤ同意語のレースゲームです。このプロジェクトのゴールはウェッブソケットを練習することです。
            <br />
            <br />
            CORSとHelmetについても勉強しました。
          </>
        ),
        tags: ['REST API', 'React', 'Typescript', 'Sockets', 'MongoDB', 'Mongoose', 'Node.js', 'Heroku', 'Tailwind', 'CRUD' ],
        image: 'src/assets/ThesauRace.png',
        website: 'https://thesaurace.herokuapp.com/',
        github: 'https://github.com/Chappo050/Thesarace'
      },
      blog: {
        title: "ブロッグ",
        text: (
          <>
            CRUDを使っている普通のブロッグです。編集とポストのアクセスがpassportJSを使用されています。
            <br />
            <br />
            このプロジェクトではルーティングとMongoDBが上手になりました。
          </>
        ),
        tags: ['REST API', 'React', 'Typescript', 'MongoDB', 'Mongoose', 'Node.js', 'Heroku', 'Tailwind', 'CRUD' ],
        image: 'src/assets/Blog.png',
        website: 'https://mern-blog-chappo050.herokuapp.com/',
        github: 'https://github.com/Chappo050/Blog-Heroku'
      },
      finder: {
        title: "人探し",
        text: (
          <>
            人探しというのはWhere's
            Wallyみたいなゲームです。FirebaseというBaaSと使用され、バックエンドを作成しました。
            <br />
            <br />
            フルスタックが好きだが、BaaSのスキルは大事だと思います。
          </>
        ),
        tags: ['React', 'JavaScript', 'BaaS', 'FireBase', 'Tailwind', 'CRUD' ],
        image: 'src/assets/Finder.png',
        website: 'https://chappo050.github.io/Finder-firebase/',
        github: 'https://github.com/Chappo050/Finder-firebase'
      },
      profile: {
        title: "プロファイル（これ）",
        text: (
          <>
            私が作ったプロジェクトをショーケースするウェッブサイトです。
            <br />
            <br />
            このウェッブサイトはTailwindでデザインを遊ぶことできます。
          </>
        ),
        tags: ['React', 'Typescript', 'Responsive Design', 'Tailwind' ],
        image: 'src/assets/Profile.png',
        website: 'https://mlchaplin.dev',
        github: 'https://github.com/Chappo050/ProfileV2'
      },
      world: {
        title: "世界データ (作成中)",
        text: (
          <>
            このプロジェクトのゴールはApollo GraphQLを上手になり、読みやすいフロントエンドを作成することです。
            <br />
            このプロジェクトの全体がTypescriptでかいてあるMERNアプリです。
          </>
        ),
        tags: ['GraphQL', 'Apollo GraphQL', 'React', 'Typescript', 'MongoDB', 'Mongoose', 'Node.js', 'Framer', 'Tailwind', 'Responsive Design', 'CRUD' ],
        image: 'src/assets/worldData.png',
        website: 'https://glacial-tor-64648.herokuapp.com/',
        github: 'https://github.com/Chappo050/World_Data'
      },
    },
  };

  export default projects