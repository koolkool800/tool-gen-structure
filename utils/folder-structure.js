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
                files: {
                  index: {
                    name: "index",
                    path: `src/modules/${moduleName}/database/repositories/abstracts/index.ts`,
                  },
                },
              },
              implements: {
                name: "implements",
                path: `src/modules/${moduleName}/database/repositories/implements`,
                files: {
                  index: {
                    name: "index",
                    path: `src/modules/${moduleName}/database/repositories/implements/index.ts`,
                  },
                },
              },
            },
          },
        },
      },
      domain: {
        name: "domain",
        path: `src/modules/${moduleName}/domain`,
        directories: {
          models: {
            name: "models",
            path: `src/modules/${moduleName}/domain/models`,
            files: {
              index: {
                name: "index",
                path: `src/modules/${moduleName}/domain/models/index.ts`,
              },
            },
          },
          enum : {
            name: "enum",
            path : `src/modules/${moduleName}/domain/enum`,
            files: {
              index: {
                name: "index",
                path : `src/modules/${moduleName}/domain/enum/index.ts`,
              }
            }
          },
          "use-case" : {
            name : "use-case",
            path : `src/modules/${moduleName}/domain/use-case`,
            files: {
              index: {
                name: "index",
                path : `src/modules/${moduleName}/domain/use-case/index.ts`,
              }
            }
          }
        },
      },
    },
    files: {
      index: {
        name: moduleName,
        path: `src/modules/${moduleName}/${moduleName}-module.ts`,
      },
    },
  };
}
