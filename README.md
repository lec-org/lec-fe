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
|  └── lec-studio
└── packages
   ├── lec-charts
   ├── lec-components
   ├── lec-hooks
   └── lec-styles
```

这是一个 pnpm-workspace 目录结构

-   apps 目录存放的是工作台项目
-   packages 目录存放的是公共组件、hooks、样式库等
