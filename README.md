# wayback-gitmoji

This is an static site, as a backup of [gitmoji.dev](https://gitmoji.dev) by [Carlos Cuesta](https://github.com/carloscuesta).

Here I add Chinese translation of the git emoji (only this, no other pages), most are from the [gitmoji.js.org](https://gitmoji.js.org) by [Jeff Tian](https://github.com/Jeff-Tian). I update it to latest version and adjust some translation words.

## Git Emojis

Data files in this project:

- [gitmojis.json](site/data/gitmojis.json)
- Chinese Translation: [gitmojis.json](site/data/zh/gitmojis.json)
- Some deprecated in Chinese version: [deprecation.json](archive/deprecation.json)

### Emojis

<details>
  <summary>Emojis ...</summary>

|   index | emoji   | code                          | description                                                   | description-zh                                 |
|--------:|:--------|:------------------------------|:--------------------------------------------------------------|:-----------------------------------------------|
|       0 | 🎨      | `:art:`                       | Improve structure / format of the code.                       | 结构改善 / 格式化代码。                        |
|       1 | ⚡️      | `:zap:`                       | Improve performance.                                          | 性能改善。                                     |
|       2 | 🔥      | `:fire:`                      | Remove code or files.                                         | 移除代码或者文件。                             |
|       3 | 🐛      | `:bug:`                       | Fix a bug.                                                    | 修复问题。                                     |
|       4 | 🚑️      | `:ambulance:`                 | Critical hotfix.                                              | 重大热修复。                                   |
|       5 | ✨      | `:sparkles:`                  | Introduce new features.                                       | 引入新的特性。                                 |
|       6 | 📝      | `:memo:`                      | Add or update documentation.                                  | 添加或者更新文档。                             |
|       7 | 🚀      | `:rocket:`                    | Deploy stuff.                                                 | 部署相关。                                     |
|       8 | 💄      | `:lipstick:`                  | Add or update the UI and style files.                         | 添加或者更新界面和样式文件。                   |
|       9 | 🎉      | `:tada:`                      | Begin a project.                                              | 启动新项目。                                   |
|      10 | ✅      | `:white_check_mark:`          | Add, update, or pass tests.                                   | 添加、更新或者通过测试。                       |
|      11 | 🔒️      | `:lock:`                      | Fix security or privacy issues.                               | 修复安全或隐私问题。                           |
|      12 | 🔐      | `:closed_lock_with_key:`      | Add or update secrets.                                        | 添加或者更新密钥。                             |
|      13 | 🔖      | `:bookmark:`                  | Release / Version tags.                                       | 发布 / 版本标签。                              |
|      14 | 🚨      | `:rotating_light:`            | Fix compiler / linter warnings.                               | 消除编译器或者代码检查工具警告。               |
|      15 | 🚧      | `:construction:`              | Work in progress.                                             | 正在进行中。                                   |
|      16 | 💚      | `:green_heart:`               | Fix CI Build.                                                 | 修复持续集成构建。                             |
|      17 | ⬇️       | `:arrow_down:`                | Downgrade dependencies.                                       | 降级依赖。                                     |
|      18 | ⬆️       | `:arrow_up:`                  | Upgrade dependencies.                                         | 升级依赖。                                     |
|      19 | 📌      | `:pushpin:`                   | Pin dependencies to specific versions.                        | 固定依赖在特定的版本。                         |
|      20 | 👷      | `:construction_worker:`       | Add or update CI build system.                                | 添加或者添加持续集成构建系统。                 |
|      21 | 📈      | `:chart_with_upwards_trend:`  | Add or update analytics or track code.                        | 添加或者更新分析或跟踪代码。                   |
|      22 | ♻️       | `:recycle:`                   | Refactor code.                                                | 重构代码。                                     |
|      23 | ➕      | `:heavy_plus_sign:`           | Add a dependency.                                             | 添加一项依赖。                                 |
|      24 | ➖      | `:heavy_minus_sign:`          | Remove a dependency.                                          | 移除一项依赖。                                 |
|      25 | 🔧      | `:wrench:`                    | Add or update configuration files.                            | 添加或者更新配置文件。                         |
|      26 | 🔨      | `:hammer:`                    | Add or update development scripts.                            | 添加或者更新部署脚本。                         |
|      27 | 🌐      | `:globe_with_meridians:`      | Internationalization and localization.                        | 国际化和本地化。                               |
|      28 | ✏️       | `:pencil2:`                   | Fix typos.                                                    | 修正拼写错误。                                 |
|      29 | 💩      | `:poop:`                      | Write bad code that needs to be improved.                     | 编写需要改善的糟糕代码。                       |
|      30 | ⏪️      | `:rewind:`                    | Revert changes.                                               | 回滚变动。                                     |
|      31 | 🔀      | `:twisted_rightwards_arrows:` | Merge branches.                                               | 合并分支。                                     |
|      32 | 📦️      | `:package:`                   | Add or update compiled files or packages.                     | 添加或者更新已编译文件或者包。                 |
|      33 | 👽️      | `:alien:`                     | Update code due to external API changes.                      | 由于外部 API 变动而更新代码。                  |
|      34 | 🚚      | `:truck:`                     | Move or rename resources (e.g.: files, paths, routes).        | 移动或者重命名资源项（例如文件、路径、路由）。 |
|      35 | 📄      | `:page_facing_up:`            | Add or update license.                                        | 添加或者更新许可证。                           |
|      36 | 💥      | `:boom:`                      | Introduce breaking changes.                                   | 引入破坏性的变动。                             |
|      37 | 🍱      | `:bento:`                     | Add or update assets.                                         | 添加或者更新静态资源。                         |
|      38 | ♿️      | `:wheelchair:`                | Improve accessibility.                                        | 改善可访问性。                                 |
|      39 | 💡      | `:bulb:`                      | Add or update comments in source code.                        | 在源代码中添加或者更新注释。                   |
|      40 | 🍻      | `:beers:`                     | Write code drunkenly.                                         | 醉酒般编写代码。                               |
|      41 | 💬      | `:speech_balloon:`            | Add or update text and literals.                              | 添加或者更新文本和字面量。                     |
|      42 | 🗃️       | `:card_file_box:`             | Perform database related changes.                             | 执行数据库相关的变动。                         |
|      43 | 🔊      | `:loud_sound:`                | Add or update logs.                                           | 添加或者更新日志。                             |
|      44 | 🔇      | `:mute:`                      | Remove logs.                                                  | 移除日志。                                     |
|      45 | 👥      | `:busts_in_silhouette:`       | Add or update contributor(s).                                 | 添加或者更新贡献者（们）。                     |
|      46 | 🚸      | `:children_crossing:`         | Improve user experience / usability.                          | 改善用户体验 / 可用性。                        |
|      47 | 🏗️       | `:building_construction:`     | Make architectural changes.                                   | 进行架构变动。                                 |
|      48 | 📱      | `:iphone:`                    | Work on responsive design.                                    | 进行响应式设计工作。                           |
|      49 | 🤡      | `:clown_face:`                | Mock things.                                                  | 模拟相关。                                     |
|      50 | 🥚      | `:egg:`                       | Add or update an easter egg.                                  | 添加或者更新一个彩蛋。                         |
|      51 | 🙈      | `:see_no_evil:`               | Add or update a .gitignore file.                              | 添加或者更新 .gitignore 文件。                 |
|      52 | 📸      | `:camera_flash:`              | Add or update snapshots.                                      | 添加或者更新快照。                             |
|      53 | ⚗️       | `:alembic:`                   | Perform experiments.                                          | 执行试验。                                     |
|      54 | 🔍️      | `:mag:`                       | Improve SEO.                                                  | 改善搜索引擎优化。                             |
|      55 | 🏷️       | `:label:`                     | Add or update types.                                          | 添加或者更新类型。                             |
|      56 | 🌱      | `:seedling:`                  | Add or update seed files.                                     | 添加或者更新种子文件。                         |
|      57 | 🚩      | `:triangular_flag_on_post:`   | Add, update, or remove feature flags.                         | 添加、更新或者移除特性标记。                   |
|      58 | 🥅      | `:goal_net:`                  | Catch errors.                                                 | 捕获错误。                                     |
|      59 | 💫      | `:dizzy:`                     | Add or update animations and transitions.                     | 添加或者更新动画和过渡效果。                   |
|      60 | 🗑️       | `:wastebasket:`               | Deprecate code that needs to be cleaned up.                   | 废弃需要清理的代码。                           |
|      61 | 🛂      | `:passport_control:`          | Work on code related to authorization, roles and permissions. | 处理与授权、角色和权限相关的代码。             |
|      62 | 🩹      | `:adhesive_bandage:`          | Simple fix for a non-critical issue.                          | 对非关键问题的简单修复。                       |
|      63 | 🧐      | `:monocle_face:`              | Data exploration/inspection.                                  | 数据探索 / 检查。                              |
|      64 | ⚰️       | `:coffin:`                    | Remove dead code.                                             | 移除死代码。                                   |
|      65 | 🧪      | `:test_tube:`                 | Add a failing test.                                           | 添加一个失败的测试。                           |
|      66 | 👔      | `:necktie:`                   | Add or update business logic.                                 | 添加或更新业务逻辑。                           |
|      67 | 🩺      | `:stethoscope:`               | Add or update healthcheck.                                    | 添加或更新健康检查。                           |
|      68 | 🧱      | `:bricks:`                    | Infrastructure related changes.                               | 基础设施相关的变动。                           |
|      69 | 🧑‍💻    | `:technologist:`              | Improve developer experience.                                 | 改善开发者体验。                               |
|      70 | 💸      | `:money_with_wings:`          | Add sponsorships or money related infrastructure.             | 添加赞助或与金钱相关的基础设施。               |
|      71 | 🧵      | `:thread:`                    | Add or update code related to multithreading or concurrency.  | 添加或者更新与多线程或并发相关的代码。         |
|      72 | 🦺      | `:safety_vest:`               | Add or update code related to validation.                     | 添加或者更新与验证相关的代码。                 |

</details>

### More ~~Deprecated~~

<details>
  <summary>More ...</summary>

|   index | emoji   | code                | description-zh                |
|--------:|:--------|:--------------------|:------------------------------|
|       0 | 🍎      | `:apple:`           | 修复在苹果系统上的问题。      |
|       1 | 🐧      | `:penguin:`         | 修复在 Linux 系统上的问题。   |
|       2 | 🏁      | `:checkered_flag:`  | 修复在 Windows 系统上的问题。 |
|       3 | 🤖      | `:robot:`           | 修复在安卓系统上的问题。      |
|       4 | 🍏      | `:green_apple:`     | 修复在 iOS 系统上的问题。     |
|       5 | 🐳      | `:whale:`           | Docker 容器相关。             |
|       6 | 👌      | `:ok_hand:`         | 代码审核后更新代码。          |
|       7 | ☸️       | `:wheel_of_dharma:` | Kubernetes 相关的工作。       |

</details>
