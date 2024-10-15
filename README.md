# only pnpm

```shell
  pnpm -v
  9.5.0
```

# Start It

```shell
# https clone
git clone https://github.com/lec-org/lec-fe.git

# ssh clone
git clone git@github.com:lec-org/lec-fe.git


# 进入目录
cd lec-fe

# 安装依赖
pnpm i

# 启动项目
pnpm dev:studio # 启动工作台项目

pnpm dev:watchApp # 以watch Main 模式启动工作台
```

# 目录结构

```
lec-fe
├── apps
|  ├── lec-studio
|  ├── lecoj
|  └── lecstudio(新工作台)
└── packages
   ├── lec-charts
   ├── lec-components
   ├── lec-hooks
   └── lec-styles
```

这是一个 pnpm-workspace 目录结构

-   apps 目录存放的是工作台项目
-   packages 目录存放的是公共组件、hooks、样式库等

## git速记

```bash
git checkout -b ur_branch_name # 创建新分支 并切过去
git branch # 看本地分支
git branch -a # 看所有分支
git checkout main # 切回主分支
git pull # 拉取最新代码
git push origin ur_branch_name # 推送最新代码到远程仓库
```
> 禁止 merge 到 main 分支 !!! 
> 禁止 push 到 main 分支 !!!

