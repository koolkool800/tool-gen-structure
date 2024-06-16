export function getFolderStructure(moduleName) {
  return {
    name: moduleName,
    directories: {
      api: {
        name: "api",
        path: `src/modules/${moduleName}/api`,
        directories: {
          http: {
            name: "http",
            path: `src/modules/${moduleName}/api/http`,
            directories: {
              controllers: {
                name: "controllers",
                path: `src/modules/${moduleName}/api/http/controllers`,
                files: {
                  index: {
                    name: "index",
                    path: `src/modules/${moduleName}/api/http/controllers/index.ts`,
                  },
                },
              },
              dtos: {
                name: "dtos",
                path: `src/modules/${moduleName}/api/http/dtos`,
                files: {
                  index: {
                    name: "index",
                    path: `src/modules/${moduleName}/api/http/dtos/index.ts`,
                  },
                },
              },
              responses: {
                name: "responses",
                path: `src/modules/${moduleName}/api/http/responses`,
                files: {
                  index: {
                    name: "index",
                    path: `src/modules/${moduleName}/api/http/responses/index.ts`,
                  },
                },
              },
            },
          },
        },
      },
      database: {
        name: "database",
        path: `src/modules/${moduleName}/database`,
        directories: {
          entities: {
            name: "entities",
            path: `src/modules/${moduleName}/database/entities`,
            files: {
              index: {
                name: "index",
                path: `src/modules/${moduleName}/database/entities/index.ts`,
              },
            },
          },
          repositories: {
            name: "repositories",
            path: `src/modules/${moduleName}/database/repositories`,
            directories: {
              abstracts: {
                name: "abstracts",
                path: `src/modules/${moduleName}/database/repositories/abstracts`,
                // files: {
                //   index: {
                //     name: "index",
                //     path: `src/modules/${moduleName}/database/repositories/abstracts/index.ts`,
                //   },
                // },
              },
              implements: {
                name: "implements",
                path: `src/modules/${moduleName}/database/repositories/implements`,
                // files: {
                //   index: {
                //     name: "index",
                //     path: `src/modules/${moduleName}/database/repositories/implements/index.ts`,
                //   },
                // },
              },
            },
          },
        },
      },
      domain: {
        name: "domain",
        path: `src/modules/${moduleName}/domain`,
      },
    },
    files: {
      "user-module": {
        name: "user-module",
        path: `src/modules/${moduleName}/user-module.ts`,
      },
    },
  };
}
