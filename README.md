# PetChat

PetChat 是一个偏内容型的宠物官网，聚合猫狗叫声、逗宠声音、养宠常识、注意事项与成长阶段知识。

## 本地开发

```bash
npm install
npm run dev
```

## 生成静态站

```bash
npm run generate
```

生成结果位于 `.output/public`，适合部署到 Cloudflare Pages。

## Cloudflare Pages 设置

- Framework preset: `None`
- Build command: `npm run generate`
- Build output directory: `.output/public`

## 内容扩充建议

- 真实音频文件放入 `public/audio`
- 修改内容数据文件：`data/site.ts`
- 如果后续文章数量明显增多，再切换到 Markdown 或 CMS

## 当前站点结构

- `/` 首页
- `/sounds` 宠物叫声与逗宠声音列表
- `/sounds/[slug]` 声音详情页
- `/training` 训练口令音频库
- `/training/[slug]` 训练口令详情页
- `/guides` 养宠常识与注意事项
- `/guides/[slug]` 知识详情页
- `/stages` 成长阶段内容
- `/stages/[slug]` 阶段详情页
- `/about` 关于与通用说明

## 你接下来最常改的地方

- 品牌文案与站点标题：`nuxt.config.ts`
- 页面内容数据：`data/site.ts`
- 首页布局：`pages/index.vue`
- 声音文件目录：`public/audio`
- 训练口令目录：`public/audio/training`
