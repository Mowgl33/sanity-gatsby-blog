export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60544ebd72dadb9ee5cc58ed",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-fc6ehdtr",
                  apiId: "bef57daa-61e8-455d-8fea-8dcb64b2e202",
                },
                {
                  buildHookId: "60544ebd7d9e9cbda55b4296",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wmix7uo5",
                  apiId: "ac2aa66a-b179-4812-aa1b-9b4eca3865f6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Mowgl33/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wmix7uo5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
